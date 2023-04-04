const { User } = require("../../models/index");

const addSubscription = async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(
    _id,
    { subscribed: true },
    {
      returnDocument: "after",
      select: "-password -subscriptionToken",
    }
  );
  res.status(200).json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      subscribed: user.subscribed,
    },
  });
};
module.exports = addSubscription;
