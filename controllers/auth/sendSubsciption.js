const { sendEmail } = require("../../helpers");
const userSubscriptionEmailTemplate = require("../../tmp/userSubscriptionEmail");

const sendSubscriptionEmail = async (req, res) => {
  const { email } = req.body;
  const subscriptionEmail = {
    to: email,
    subject: "Email",
    html: userSubscriptionEmailTemplate,
  };
  await sendEmail(subscriptionEmail);
  res.json({
    message: "Subscription",
  });
};

module.exports = sendSubscriptionEmail;
