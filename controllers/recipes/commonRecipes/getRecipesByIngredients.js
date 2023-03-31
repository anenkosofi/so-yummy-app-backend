const CommonRecipe = require("../../models");
const { HttpError } = require("../../../helpers");

const getRecipesByIngredients = async (req, res) => {
  const { ingredients } = req.query;

  const recipes = await CommonRecipe.find({
    ingredients: { $elemMatch: { name: { $in: ingredients } } },
  });
  if (!recipes) {
    throw HttpError(404, `Meals with ${ingredients} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getRecipesByIngredients;
