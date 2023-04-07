const { CommonRecipe } = require("../../../models");

const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 8 } = req.query;
  console.log(category);

  const skip = (page - 1) * limit;
  const filters = { category: { $regex: new RegExp(category, "i") } };
  const recipes = await CommonRecipe.find(filters, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  res.status(200).json({
    recipes,
  });
};
module.exports = getRecipesByCategory;
