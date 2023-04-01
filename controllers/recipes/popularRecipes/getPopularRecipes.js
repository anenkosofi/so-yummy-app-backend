const { CommonRecipe } = require("../../../models");

const getPopularRecipes = async (req, res) => {
  const recipes = await CommonRecipe.find({ popularity: { $gte: 8 } });
  recipes.splice(4);

  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getPopularRecipes;
