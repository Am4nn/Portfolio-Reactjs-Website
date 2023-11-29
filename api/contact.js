const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');

const mailTempltePlainText = ({ email, message }) => `${email}: ${message}`;
const mailTemplateHTML = ({ email, message }) => `<h3><b>Email: ${email}</b></h3> <br> <div><b>Message:</b> ${message}</div>`;

const sendMessageToMe = async ({ email, message }) => {

    /** @type {nodemailer.Options} */
    const mailData = {
        from: 'Portfolio Website <portfolio-website@gmail.com>',
        to: process.env.MY_EMAIL,
        subject: 'Recieved a message from your portfolio website',
        text: mailTempltePlainText({ email, message }),
        html: mailTemplateHTML({ email, message }),
    };

    return new Promise((resolve, reject) => {
        nodemailer.createTransport({
            port: process.env.MAIL_PORT,
            service: process.env.MAIL_SERVICE,
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
            secure: true,
        }).sendMail(mailData, function (err, info) {
            if (err) reject(err)
            else resolve(info);
        });
    })
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Kolkata', // India time zone
    timeZoneName: 'short',
});

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB;
const MONGO_MAIL_COLLECTION = process.env.MONGO_MAIL_COLLECTION;
const MONGO_ERROR_COLLECTION = process.env.MONGO_ERROR_COLLECTION;
let client = null;

const connectDB = async () => {
    try {
        client = new MongoClient(url);
        await client.connect();
    } catch (error) {
        client = null;
        console.error(error);
    }
}

const logger = async (data, collectionName) => {
    try {
        if (client) {
            await client.db(dbName).collection(collectionName).insertOne({
                ...data,
                date: dateFormatter.format(new Date()),
                timestamp: new Date()
            });
        } else {
            console.log(data);
        }
    } catch (error) {
        console.error(error, data);
    }
}

process.on('SIGINT', async () => {
    if (client)
        await client.close();
    process.exit(0);
});

// ##############################################################################

export default async function handler(request, response) {

    await connectDB();

    if (request.method === "POST") {
        const { email, message } = request.body;
        try {
            await logger({ email, message }, MONGO_MAIL_COLLECTION);

            const sendStatusRes = await sendMessageToMe({ email, message });
            if (sendStatusRes.rejected.length > 0) {
                await logger({ msg: "Mail Rejected", sendStatusRes }, MONGO_ERROR_COLLECTION);
                return response.status(500).json("Mail Rejected");
            }
            return response.status(200).json("Thank you for contacting me. I will get back to you as soon as possible!");
        } catch (error) {
            await logger({ msg: "Internal Server Error", error }, MONGO_ERROR_COLLECTION);
            return response.status(500).json(error || "Internal Server Error");
        }

    }

    return response.status(404).json("Not Found");
}
