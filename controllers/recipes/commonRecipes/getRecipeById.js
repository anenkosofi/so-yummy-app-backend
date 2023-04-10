const { CommonRecipe } = require("../../../models");
const { NotFound } = require("http-errors");

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const recipe = await CommonRecipe.findOne({ _id: id }).populate(
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
