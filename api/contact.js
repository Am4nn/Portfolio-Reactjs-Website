const nodemailer = require('nodemailer');

const mailTempltePlainText = ({ email, message }) => `${email}: ${message}`;
const mailTemplateHTML = ({ email, message }) => `<h3><b>Email: ${email}</b></h3> <br> <div>Message: ${message}</div>`;

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

// ##############################################################################

export default async function handler(request, response) {

    if (request.method === "POST") {
        const { email, message } = request.body;
        try {
            console.log("Sending Mail: ", { email, message });
            const sendStatusRes = await sendMessageToMe({ email, message });
            if (sendStatusRes.rejected.length > 0) {
                console.error("Mail Rejected: ", sendStatusRes);
                return response.status(500).json("Mail Rejected");
            }
            return response.status(200).json("Thank you for contacting me. I will get back to you as soon as possible!");
        } catch (error) {
            console.error("Internal Server Error: ", error);
            return response.status(500).json(error || "Internal Server Error");
        }

    }

    return response.status(404).json("Not Found");
}
