const { OwnRecipe } = require("../../../models");
const { NotFound } = require("http-errors");

const deleteRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const recipe = await OwnRecipe.findByIdAndRemove({ _id: id, owner });
  if (!recipe) {
    throw new NotFound(`Recipe with id: ${id} is not found`);
  }

  res.status(200).json({
    message: "Recipe deleted successfully",
  });
};

module.exports = deleteRecipe;
