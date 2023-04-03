const { ctrl } = require("../../../helpers");

const getRecipesByCategory = require("./getRecipesByCategory");
const getCategoryRecipes = require("./getCategoryRecipes");
const getRecipeById = require("./getRecipeById");

module.exports = {
  getRecipesByCategory: ctrl(getRecipesByCategory),
  getCategoryRecipes: ctrl(getCategoryRecipes),
  getRecipeById: ctrl(getRecipeById),
};
