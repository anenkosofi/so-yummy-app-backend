const { CommonRecipe } = require("../../../models");

const getFavoriteRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { favorite } = req.query;
  const filters = { owner };
  if (favorite) {
    filters.favorite = favorite;
  }
  const result = await CommonRecipe.find(filters, "favorite");
  res.json(result);
};

module.exports = getFavoriteRecipes;
