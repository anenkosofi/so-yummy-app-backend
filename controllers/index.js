const ingredients = require("./ingredients");
const categories = require("./categories");
const auth = require("./auth");
const commonRecipes = require("./recipes/commonRecipes");
const popularRecipes = require("./recipes/popularRecipes");
const favoriteRecipes = require("./recipes/favoriteRecipes");

module.exports = {
  ingredients,
  categories,
  auth,
  commonRecipes,
  popularRecipes,
  favoriteRecipes,
};
