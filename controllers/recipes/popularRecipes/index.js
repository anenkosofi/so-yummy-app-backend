const { ctrl } = require("../../../helpers");

const getPopularRecipes = require("./getPopularRecipes");

module.exports = {
  getPopularRecipes: ctrl(getPopularRecipes),
};
