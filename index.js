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

const express = require('express');
const app = express();

// parse json request body
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(cors({ origin: true, credentials: true }));
app.use(mongoSanitize());
app.use(hpp());
app.use(helmet());
app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Minutes
    max: 500
}));

app.get("/api", (req, res) => {
    res.status(200).send("API Running");
});

app.post("/api/contact", (req, res) => {
    const { email, message } = req.body;
    try {
        console.log({ email, message });
        res.status(200).json("Thank you for contacting me. I will get back to you as soon as possible!");
    } catch (error) {
        console.log(error);
        res.status(500).json(error || "Internal Server Error");
    }
});

// Serve Static Assets
// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
});
