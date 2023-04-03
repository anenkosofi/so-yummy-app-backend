const { CommonRecipe } = require("../../../models");

const getRecipesByTitleOrIngredients = async (req, res) => {
  const { title, ingredients, page = 1, limit = 12 } = req.query;

  let recipes = null;
  if (title) {
    recipes = await CommonRecipe.find(
      { title: { $regex: new RegExp(title, "i") } },
      "",
      {
        skip: (page - 1) * limit,
        limit: Number(limit),
      }
    );
  }

  if (ingredients) {
    recipes = await CommonRecipe.aggregate([
      {
        $lookup: {
          from: "ingredients",
          localField: "ingredients.id",
          foreignField: "_id",
          as: "ingredients",
        },
      },
      {
        $match: {
          "ingredients.ttl": { $regex: new RegExp(ingredients, "i") },
        },
      },
      {
        $skip: (page - 1) * limit,
      },
      { $limit: Number(limit) },
    ]);
  }

  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getRecipesByTitleOrIngredients;
