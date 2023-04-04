const { OwnRecipe } = require("../../../models");
const { HttpError } = require("../../../helpers");

const deleteRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const recipe = await OwnRecipe.findByIdAndRemove({ _id: id, owner });
  if (!recipe) {
    throw HttpError(404, "Not Found");
  }

  res.json({
    status: "success",
    code: 200,
    recipe,
  });
};

module.exports = deleteRecipe;
