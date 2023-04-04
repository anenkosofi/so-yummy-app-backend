const { ctrl } = require("../../helpers");

const addIngredients = require("./addIngredients");
const deleteIngredients = require("./deleteIngredients");
const getIngredients = require("./getIngredients");

module.exports = {
  addIngredients: ctrl(addIngredients),
  deleteIngredients: ctrl(deleteIngredients),
  getIngredients: ctrl(getIngredients),
};
