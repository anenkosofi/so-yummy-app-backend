const { sendEmail } = require("../../helpers");
const userSubscriptionEmailTemplate = require("../../tmp/userSubscriptionEmail");
const { Conflict } = require("http-errors");

const sendSubscriptionEmail = async (req, res) => {
  const { email } = req.body;
  const { email: emailUser } = req.user;
  if (email !== emailUser) {
    throw new Conflict(`Your email: ${email} is not register`);
  }
  const subscriptionEmail = {
    to: email,
    subject: "Email",
    html: userSubscriptionEmailTemplate,
  };
  await sendEmail(subscriptionEmail);
  res.status(200).json({
    message: "Subscription",
  });
};

module.exports = sendSubscriptionEmail;
