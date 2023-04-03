const { ctrl } = require("../../../helpers");

const getRecipesByTitleOrIngredients = require("./getRecipesByTitleOrIngredients");

module.exports = {
  getRecipesByTitleOrIngredients: ctrl(getRecipesByTitleOrIngredients),
};
