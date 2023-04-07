const { CommonRecipe } = require("../../../models");
const { HttpError } = require("../../../helpers");

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const recipe = await CommonRecipe.findOne({ _id: id }).populate(
    "ingredients.id"
  );
  if (!recipe) {
    throw HttpError(404, "Not Found");
  }
  res.status(200).json({
    recipe,
  });
};

module.exports = getRecipeById;
