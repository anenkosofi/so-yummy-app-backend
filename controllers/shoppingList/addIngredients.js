const { ShoppingList } = require("../../models");

const addIngredients = async (req, res) => {
  const { _id: owner } = req.user;

  const ingredients = await ShoppingList.create({
    ...req.body,
    owner,
  });

  res.status(201).json({
    status: "success",
    code: 201,
    ingredients,
  });
};

module.exports = addIngredients;
