const { Ingredient } = require("../../models");

const getIngredientsList = async (req, res) => {
  const ingredients = await Ingredient.find({});
  res.json({
    status: "success",
    code: 200,
    ingredients,
  });
};

module.exports = getIngredientsList;
