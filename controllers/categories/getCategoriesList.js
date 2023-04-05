const { CommonRecipe } = require("../../models");

const getCategoriesList = async (req, res) => {
  const recipes = await CommonRecipe.find({});
  const categories = recipes
    .map(({ category }) => category)
    .filter((category, idx, array) => array.indexOf(category) === idx)
    .sort((a, b) => a.localeCompare(b));
  res.status(200).json({
    categories,
  });
};

module.exports = getCategoriesList;
