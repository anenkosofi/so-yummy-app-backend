const CommonRecipe = require("../../models");
const { HttpError } = require("../../../helpers");

const getRecipesByTitle = async (req, res) => {
  const { title } = req.params;

  const regex = new RegExp(title, "i");

  const recipes = await CommonRecipe.find({ title: regex });
  if (!recipes) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getRecipesByTitle;
