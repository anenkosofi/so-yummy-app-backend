const { ctrl } = require("../../../helpers");

const addRecipe = require("./addRecipe");
const deleteRecipe = require("./deleteRecipe");
const getAllRecipes = require("./getAllRecipes");

module.exports = {
    addRecipe: ctrl(addRecipe),
    getAllRecipes: ctrl(getAllRecipes),
    deleteRecipe: ctrl(deleteRecipe),
  };