const { User } = require("../../models/index");

const { sendEmail } = require("../../helpers");
const userSubscriptionEmailTemplate = require("../../tmp/userSubscriptionEmail");
const { Conflict } = require("http-errors");

const sendSubscriptionEmail = async (req, res) => {
  const { _id } = req.user;
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

  const user = await User.findByIdAndUpdate(
    _id,
    { subscribed: true },
    {
      returnDocument: "after",
      select: "-password -subscriptionToken",
    }
  );

  res.status(201).json({
    message:
      "Subscription successfully added and subscription message sent to email",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      subscribed: user.subscribed,
    },
  });
};

module.exports = sendSubscriptionEmail;
