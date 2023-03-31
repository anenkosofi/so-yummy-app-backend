const CommonRecipe = require("../../models");

const getRecipesByCategory = async (req, res) => {
  const { category } = req.params;
  const { query } = req.query;
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const recipes = await CommonRecipe.find(
    {
      category,
      title: { $regex: new RegExp(query, "i") },
    },
    "-createdAt -updatedAt",
    { skip, limit }
  );

  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getRecipesByCategory;
