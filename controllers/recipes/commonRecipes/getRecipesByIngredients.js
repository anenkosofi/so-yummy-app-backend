// http://localhost:8080/api/search/ingredient/salmon

const { HttpError } = require("../../../helpers");
const getSkipLimitPage = require("../../../helpers/getSkipLimitPage");
const CommonRecipe = require("../../../models/commonRecipe");

const getRecipesByIngredients = async (req, res) => {
  const { query } = req.params;
  if (!query) {
    throw HttpError(400);
  }

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
  res.json({ data: result, userId, skip, page, limit });

  console.log(req.query);
};

module.exports = getRecipesByIngredients;
