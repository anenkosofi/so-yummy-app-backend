const { CommonRecipe } = require("../../../models");
const { User } = require("../../../models");
const { HttpError } = require("../../../helpers");

const deleteFromFavoriteRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const recipe = await CommonRecipe.findById({ _id: id });
  if (!recipe) {
    throw HttpError(404, "Not Found");
  }
  const result = await User.findByIdAndUpdate(
    { _id: id, owner },
    { $pull: { favorites: recipe } },
    {
      new: true,
    }
  );
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "Recipe deleted" });
};

module.exports = deleteFromFavoriteRecipes;
