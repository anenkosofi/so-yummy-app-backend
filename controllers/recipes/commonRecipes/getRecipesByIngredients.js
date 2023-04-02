const {
  getFacetObject,
  getSortTypeByTitleOrPopularity,
  processPagedRecipesResult,
  HttpError,
  getSkipLimitPage,
} = require("../../../helpers");

const CommonRecipe = require("../../../models/commonRecipe");

const getRecipesByIngredients = async (req, res) => {
  const { query } = req.params;
  if (!query) {
    throw HttpError(400);
  }

  const regex = new RegExp(query.trim().toLowerCase(), "i");
  const userId = req.user.id;

  const { page: sPage = 1, limit: sLimit = 12, sort: sSort } = req.query;
  const { skip, limit, page } = getSkipLimitPage({
    page: sPage,
    limit: sLimit,
  });
  const { sortOpts, sort } = getSortTypeByTitleOrPopularity(sSort);

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
    // {
    //   $skip: skip,
    // },
    // {
    //   $limit: limit,
    // },
    {
      ...getFacetObject({ sortOpts, skip, limit }),
    },
  ]);
  const response = processPagedRecipesResult({ result, userId });

  res.json({
    // data: result,
    ...response,
    skip,
    page,
    limit,
    sort,
  });

  console.log(req.query);
};

module.exports = getRecipesByIngredients;
