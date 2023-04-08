const { OwnRecipe } = require("../../../models");

const getAllRecipes = async (req, res) => {
  const { _id: owner } = req.user;

  const recipes = await OwnRecipe.find({ owner });

  res.status(200).json({
    recipes,
  });
};

module.exports = getAllRecipes;
