const { User } = require("../../../models");

const getFavoriteRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;
  const result = await User.find({ _id: owner }, "favorites", {
    skip,
    limit,
  });
  res.json(result);
};

module.exports = getFavoriteRecipes;
