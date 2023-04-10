const { User } = require("../../../models");
const { NotFound } = require("http-errors");

const deleteFromFavoriteRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const result = await User.findByIdAndUpdate(
    { _id: owner },
    { $pull: { favorites: id } },
    {
      new: true,
    }
  );
  if (!result) {
    throw new NotFound(`Recipe with id: ${id} is not found`);
  }
  res
    .status(200)
    .json({ message: "Recipe deleted from favorites successfully" });
};

module.exports = deleteFromFavoriteRecipes;
