const { ShoppingList } = require("../../models");
const { NotFound } = require("http-errors");

const deleteIngredients = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const ingredient = await ShoppingList.findByIdAndRemove({ _id: id, owner });

  if (!ingredient) {
    throw new NotFound(`Ingredient with id: ${id} is not found`);
  }
  res.json({
    message: "Ingredient deleted successfully",
  });
};

module.exports = deleteIngredients;
