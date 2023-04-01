const { ctrl } = require("../../../helpers");

const getRecipesByCategory = require("./getRecipesByCategory");
const getCategoryRecipes = require("./getCategoryRecipes");
const getRecipesByIngredients = require("./getRecipesByIngredients");
const getRecipesByTitle = require("./getRecipesByTitle");

module.exports = {
  getRecipesByCategory: ctrl(getRecipesByCategory),
  getCategoryRecipes: ctrl(getCategoryRecipes),
  getRecipesByTitle: ctrl(getRecipesByTitle),
  getRecipesByIngredients: ctrl(getRecipesByIngredients),
};
