const nodemailer = require('nodemailer');

const handleError = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.log("Send message")

    if (statusCode === 500) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
        user: 'sender@gmail.com',
        pass: 'senderpassword'
        }
    });

    const mailOptions = {
        from: 'sender@gmail.com',
        to: 'receiver@gmail.com',
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