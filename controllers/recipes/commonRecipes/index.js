const { ctrl } = require("../../../helpers");

const getRecipesByCategory = require("./getRecipesByCategory");
const getCategoryRecipes = require("./getCategoryRecipes");
const getRecipeById = require("./getRecipeById");
const getRecipesByTitle = require("./getRecipesByTitle");
const getRecipesByIngredients = require("./getRecipesByIngredients");

module.exports = {
  getRecipesByCategory: ctrl(getRecipesByCategory),
  getCategoryRecipes: ctrl(getCategoryRecipes),
  getRecipeById: ctrl(getRecipeById),
  getRecipesByTitle: ctrl(getRecipesByTitle),
  getRecipesByIngredients: ctrl(getRecipesByIngredients),
};
