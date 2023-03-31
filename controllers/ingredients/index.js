const { ctrl } = require("../../helpers");

const getIngredientsList = require("./getIngredientsList");

module.exports = {
  getIngredientsList: ctrl(getIngredientsList),
};
