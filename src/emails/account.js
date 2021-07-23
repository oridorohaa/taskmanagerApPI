const sgMail = require("@sendgrid/mail");

// const sendAPIKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRIND_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "oridorohaa@gmail.com",
    subject: "Welcome to the App",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "oridorohaa@gmail.com",
    subject: "Sorry to See you Go ",
    text: `We are sorry to see you go ${name}. Hope to see you back soon. If you have a spare moment, let us know what we could have done to imporve our services for you`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
