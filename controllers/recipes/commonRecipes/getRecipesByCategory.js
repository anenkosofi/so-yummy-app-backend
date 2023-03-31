const CommonRecipe = require("../../models");

const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;

  const recipes = await CommonRecipe.find({ category });

  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getRecipesByCategory;
