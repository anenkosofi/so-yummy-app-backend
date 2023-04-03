const { User } = require("../../../models");
const { HttpError } = require("../../../helpers");

const addRecipe = async (req, res) => {
  const { favorite } = req.body;
  const { _id: owner } = req.user;

  const user = await User.findOneAndUpdate(
    { _id: owner },
    { $push: { favorites: favorite } },
    { new: true }
  );
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  res.status(201).json({ message: "Recipe added to favorites successfully" });
};

module.exports = addRecipe;
