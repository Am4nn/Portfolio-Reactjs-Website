if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const hpp = require('hpp');
const rateLimit = require("express-rate-limit");
const { connectNodeMailer, sendMessageToMe } = require('./utils/mail');

const express = require('express');
const app = express();

// since hosting on onrender.com, we need to trust the proxy
app.set('trust proxy', 2);

// parse json request body
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(cors({ origin: true }));
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());
app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 100 // 100 Requests
}));

app.get("/api", (req, res) => {
    res.status(200).send("API Running");
});

app.get("/api/test", (req, res) => {
    res.status(200).json({
        "ip": req.ip,
        "x-forwarded-for": req.headers['x-forwarded-for']
    });
});

app.post("/api/contact", async (req, res) => {
    const { email, message } = req.body;
    try {
        console.log("Send Mail: ", { email, message });
        const response = await sendMessageToMe({ email, message });
        if (response.rejected.length > 0) {
            console.error(response);
            return res.status(500).json("Mail Rejected");
        }
        return res.status(200).json("Thank you for contacting me. I will get back to you as soon as possible!");
    } catch (error) {
        console.error(error);
        return res.status(500).json(error || "Internal Server Error");
    }
});

// Serve Static Assets only if specified
if (process.env.NO_CLIENT !== 'true') {
    // Set Static Folder
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {

    console.log(`Server running on PORT ${PORT}`);

    try {
        // Establish Connection for Nodemailer
        await connectNodeMailer();
        console.log("Connected to Nodemailer");
    } catch (error) {
        console.error(error);
    }

}).on('error', error => {
    console.error(`Failed to start server: ${error}`);
});
