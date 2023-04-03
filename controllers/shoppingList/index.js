const { ctrl } = require("../../helpers");

const addIngridients = require("./getCategoriesList");
const deleteIngridients = require("./deleteIngridients");
const getIngridients = require("./getIngridients");

module.exports = {
  addIngridients: ctrl(addIngridients),
  addIngridients: ctrl(deleteIngridients),
  getIngridients: ctrl(getIngridients),
};
