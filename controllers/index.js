const ingredients = require("./ingredients");
const categories = require("./categories");
const auth = require("./auth");
const commonRecipes = require("./recipes/commonRecipes");
const popularRecipes = require("./recipes/popularRecipes");
const favoriteRecipes = require("./recipes/favoriteRecipes");
const searchedRecipes = require("./recipes/search");
const ingredients = require("./ingredients");

module.exports = {
  ingredients,
  categories,
  auth,
  commonRecipes,
  popularRecipes,
  favoriteRecipes,
  searchedRecipes,
};
