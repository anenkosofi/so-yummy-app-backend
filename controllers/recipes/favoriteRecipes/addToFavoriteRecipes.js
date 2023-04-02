const { CommonRecipe } = require("../../../models");
const { User } = require("../../../models");
const { HttpError } = require("../../../helpers");

const addToFavoriteRecipes = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const recipe = await CommonRecipe.findById({ _id: id });
  if (!recipe) {
    throw HttpError(404, "Not Found");
  }

  const user = await User.findOneAndUpdate(
    { _id: owner },
    { $push: { favorites: recipe } },
    { new: true }
  );
  if (!user) {
    throw HttpError(404, "Not Found");
  }

  res.status(201).json({ message: "Recipe added to favorites successfully" });
};

module.exports = addToFavoriteRecipes;
