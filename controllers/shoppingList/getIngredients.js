const { ShoppingList } = require("../../models");

const getIngredients = async (req, res) => {
  const { _id: owner } = req.user;

  const ingredients = await ShoppingList.find({ owner }).populate("ingredient");

  res.status(200).json({
    ingredients,
  });
};

module.exports = getIngredients;
