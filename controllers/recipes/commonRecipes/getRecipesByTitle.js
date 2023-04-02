// http://localhost:8080/api/search/title/query

const CommonRecipe = require("../../../models/commonRecipe");
const { HttpError } = require("../../../helpers");
const getSkipLimitPage = require("../../../helpers/getSkipLimitPage");

const getRecipesByTitle = async (req, res) => {
  const { query } = req.params;

  console.log(req.query);

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

  try {
    const result = await CommonRecipe.find({ title: { $regex: regex } })
      .skip(skip)
      .limit(limit);

    res.json({ result, userId, page, limit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getRecipesByTitle;
