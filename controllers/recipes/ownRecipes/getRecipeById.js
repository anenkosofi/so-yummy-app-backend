const { OwnRecipe } = require("../../../models");
const { NotFound } = require("http-errors");

const getRecipeById = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const recipe = await OwnRecipe.findOne({ _id: id, owner }).populate(
    "ingredients.id"
  );
  if (!recipe) {
    throw new NotFound(`Recipe with id: ${id} is not found`);
  }
  res.status(200).json({
    recipe,
  });
};

module.exports = getRecipeById;
