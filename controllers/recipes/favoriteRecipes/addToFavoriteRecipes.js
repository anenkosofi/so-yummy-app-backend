// const { CommonRecipe } = require("../../../models");
const { User } = require("../../../models");
const { NotFound } = require("http-errors");

const addToFavoriteRecipes = async (req, res) => {
  const { favorite } = req.body;
  const { _id: owner } = req.user;
  const user = await User.findOneAndUpdate(
    { _id: owner },
    { $push: { favorites: favorite } },
    { new: true }
  );
  if (!user) {
    throw new NotFound(`Recipe with id: ${id} is not found`);
  }

  res.status(201).json({ message: "Recipe added to favorites successfully" });
};

module.exports = addToFavoriteRecipes;
