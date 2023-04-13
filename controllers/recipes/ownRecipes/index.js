const { ctrl } = require("../../../helpers");

const addRecipe = require("./addRecipe");
const deleteRecipe = require("./deleteRecipe");
const getAllRecipes = require("./getAllRecipes");
const getRecipeById = require("./getRecipeById");

module.exports = {
  addRecipe: ctrl(addRecipe),
  getAllRecipes: ctrl(getAllRecipes),
  deleteRecipe: ctrl(deleteRecipe),
  getRecipeById: ctrl(getRecipeById),
};
