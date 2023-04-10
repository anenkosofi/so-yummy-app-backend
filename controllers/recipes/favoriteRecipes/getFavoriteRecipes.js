const { User } = require("../../../models");
const { NotFound } = require("http-errors");

const getFavoriteRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  let { page = 1, limit = 4 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  const skip = (page - 1) * limit;
  // const result = await User.find({ _id: owner }, "favorites", {
  //   skip,
  //   limit,
  // }).populate("favorites", "_id title description thumb time");

  const result = await User.findOne(
    { _id: owner },
    { favorites: { $slice: [skip, limit] } }
  ).populate({
    path: "favorites",
    select: "_id title description thumb time",
  });

  if (!result) {
    throw new NotFound(`Recipe with id: ${id} is not found`);
  }

  const recipes = result.favorites;

  res.status(200).json(recipes);
};

module.exports = getFavoriteRecipes;
