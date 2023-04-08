const { CommonRecipe } = require("../../../models");

const getPopularRecipes = async (req, res) => {
  const recipes = await CommonRecipe.find({ popularity: { $gte: 8 } });
  recipes.splice(4);

  res.status(200).json({
    recipes,
  });
};

module.exports = getPopularRecipes;
