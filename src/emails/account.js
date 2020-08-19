const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'jainswapnil420@gmail.com',
        subject: 'Welcome to Task Manager API',
        text: `Welcome to the APP, ${name}.Please let us know How you get along with APP.`
    };

    sgMail.send(msg);
}

sendCancelEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'jainswapnil420@gmail.com',
        subject: 'Good Bye from Team Task Manager API',
        text: `Good Bye from the APP, ${name}.Please let us know if we can do something to retains you with us.`
    };

    sgMail.send(msg);
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
};