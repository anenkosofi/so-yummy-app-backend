const { ShoppingList } = require("../../models");

const getIngredients = async (req, res) => {
  const { _id: owner } = req.user;

  const ingredients = await ShoppingList.find({ owner }).populate("ingredient");

  res.json({
    status: "success",
    code: 200,
    ingredients,
  });
};

module.exports = getIngredients;
