const nodemailer = require('nodemailer');

/** @type {nodemailer.Transporter} */
let transporter = null;

const connectNodeMailer = () => {
    return new Promise((resolve, reject) => {
        try {
            // create reusable transporter object using the default SMTP transport
            transporter = nodemailer.createTransport({
                port: process.env.MAIL_PORT,
                service: process.env.MAIL_SERVICE,
                host: process.env.MAIL_HOST,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                },
                secure: true,
            });
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const mailTempltePlainText = ({ email, message }) => `${email}: ${message}`;
const mailTemplateHTML = ({ email, message }) => `<b>${email}</b> <br>${message}<br/>`;
const myEmail = process.env.MY_EMAIL;

const sendMessageToMe = async ({ email, message }) => {

    /** @type {nodemailer.Options} */
    const mailData = {
        from: 'Portfolio Website <portfolio-website@gmail.com>',
        to: myEmail,
        subject: 'Recieved a message from your portfolio website',
        text: mailTempltePlainText({ email, message }),
        html: mailTemplateHTML({ email, message }),
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (err, info) {
            if (err) reject(err)
            else resolve(info);
        });
    })
}

module.exports = {
    connectNodeMailer, sendMessageToMe
}
