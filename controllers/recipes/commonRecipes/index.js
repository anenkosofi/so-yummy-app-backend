const { ctrl } = require("../../../helpers");

const getRecipesByCategory = require("./getRecipesByCategory");
const getCategoryRecipes = require("./getCategoryRecipes");

module.exports = {
  getRecipesByCategory: ctrl(getRecipesByCategory),
  getCategoryRecipes: ctrl(getCategoryRecipes),
};
