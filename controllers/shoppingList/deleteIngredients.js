const { ShoppingList } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteIngredients = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const ingredient = await ShoppingList.findByIdAndRemove({ _id: id, owner });

  if (!ingredient) {
    throw HttpError(404, `Contact with id=${id} is not found`);
  }
  res.json({
    status: "success",
    code: 200,
    ingredient,
  });
};

module.exports = deleteIngredients;
