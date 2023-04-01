const { CommonRecipe } = require("../../../models");
const { HttpError } = require("../../../helpers");

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  const result = await CommonRecipe.findOne({ _id: id });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({
    status: "success",
    code: 200,
    result,
  });
};

module.exports = getRecipeById;
