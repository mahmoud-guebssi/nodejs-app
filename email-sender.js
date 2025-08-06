const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password' // Your email password or app password
    }
});

// Setup email data
const mailOptions = {
    from: 'your-email@gmail.com', // Sender address
    to: 'recipient-email@gmail.com', // List of recipients
    subject: 'Hello from Node.js', // Subject line
    text: 'This is a test email sent from a Node.js application!', // Plain text body
    html: '<h1>Hello from Node.js</h1><p>This is a test email sent from a Node.js application!</p>' // HTML body
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred: ' + error.message);
    }
    console.log('Message sent: %s', info.messageId);
});