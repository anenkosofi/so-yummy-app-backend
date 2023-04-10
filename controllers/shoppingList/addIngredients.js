const { ShoppingList } = require("../../models");

const addIngredients = async (req, res) => {
  const { _id: owner } = req.user;

  const ingredients = await ShoppingList.create({
    ...req.body,
    owner,
  });

  res.status(201).json({
    ingredients,
  });
};

module.exports = addIngredients;
