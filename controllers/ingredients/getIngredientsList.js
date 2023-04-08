const { Ingredient } = require("../../models");

const getIngredientsList = async (req, res) => {
  const ingredients = await Ingredient.find({});
  res.status(200).json({
    ingredients,
  });
};

module.exports = getIngredientsList;
