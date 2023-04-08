const { CommonRecipe } = require("../../../models");

const getRecipesByTitleOrIngredients = async (req, res) => {
  const { title, ingredients, page = 1, limit = 12 } = req.query;

  if (title) {
    const [
      {
        recipes,
        total: [{ total }],
      },
    ] = await CommonRecipe.aggregate([
      {
        $facet: {
          recipes: [
            {
              $match: {
                title: { $regex: new RegExp(title, "i") },
              },
            },
            { $skip: (page - 1) * limit },
            { $limit: Number(limit) },
          ],
          total: [
            {
              $match: {
                title: { $regex: new RegExp(title, "i") },
              },
            },
            { $count: "total" },
          ],
        },
      },
    ]);

    return res.status(200).json({
      total,
      recipes,
    });
  }

  if (ingredients) {
    const [
      {
        recipes,
        total: [{ total }],
      },
    ] = await CommonRecipe.aggregate([
      {
        $facet: {
          recipes: [
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
            { $skip: (page - 1) * limit },
            { $limit: Number(limit) },
          ],
          total: [
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
            { $count: "total" },
          ],
        },
      },
    ]);

    return res.status(200).json({
      total,
      recipes,
    });
  }
};

module.exports = getRecipesByTitleOrIngredients;
