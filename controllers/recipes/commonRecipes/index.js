const { ctrl } = require("../../helpers");

const getRecipesByCategory = require("./getRecipesByCategory");

module.exports = {
  getRecipesByCategory: ctrl(getRecipesByCategory),
};
