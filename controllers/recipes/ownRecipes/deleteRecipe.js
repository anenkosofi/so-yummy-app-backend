const { OwnRecipe } = require("../../../models");
const { HttpError } = require("../../../helpers");

const deleteRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const recipe = await OwnRecipe.findByIdAndRemove({ _id: id, owner });
  if (!recipe) {
    throw HttpError(404, "Not Found");
  }

  res.status(200).json({
    message: "Recipe deleted successfully",
  });
};

module.exports = deleteRecipe;
