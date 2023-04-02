const { ctrl } = require("../../../helpers");

const addToFavoriteRecipes = require("../favoriteRecipes/addToFavoriteRecipes");
const getFavoriteRecipes = require("../favoriteRecipes/getFavoriteRecipes");
const deleteFromFavoriteRecipes = require("../favoriteRecipes/deleteFromFavoriteRecipes");

module.exports = {
  addToFavoriteRecipes: ctrl(addToFavoriteRecipes),
  getFavoriteRecipes: ctrl(getFavoriteRecipes),
  deleteFromFavoriteRecipes: ctrl(deleteFromFavoriteRecipes),
};
