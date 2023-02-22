const nodemailer = require('nodemailer');
const outlookEmail = process.env.outlookEmail;
const outlookPassword = process.env.outlookPassword;

const handleError = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.log("Send message")

    if (statusCode === 500) {
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: outlookEmail,
            pass: outlookPassword
        }
    });

    const mailOptions = {
        from: outlookEmail,
        to: outlookEmail,
        subject: `Important!! : ${message}`,
        text: `Stack Trace:\n${err.stack}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        console.error(error);
        } else {
        console.log(`Email sent: ${info.response}`);
        }
    });
    }
    res.status(statusCode).send(message);
}

module.exports = handleError;