// search/ingredient/query

const CommonRecipe = require("../../../models/commonRecipe");
const {
  getFacetObject,
  getSortTypeByTitleOrPopularity,
  processPagedRecipesResult,
} = require("../../../helpers");
const getSkipLimitPage = require("../../../helpers/getSkipLimitPage");

const getRecipesByIngredients = async (req, res) => {
  const { query } = req.params;
  console.log(query);

  const regex = new RegExp(query.trim().toLowerCase(), "i");

  const userId = req.user.id;

  const { page: sPage = 1, limit: sLimit = 12 } = req.query;

  const { skip, limit, page } = getSkipLimitPage({
    page: sPage,
    limit: sLimit,
  });

  const result = await CommonRecipe.aggregate([
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
        "ingredients.ttl": { $regex: regex },
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ]);
  res.json({ data: result, userId, page, limit });
};
module.exports = getRecipesByIngredients;
