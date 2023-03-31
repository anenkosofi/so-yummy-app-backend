const { ctrl } = require("../../helpers");

const getCategoriesList = require("./getCategoriesList");

module.exports = {
  getCategoriesList: ctrl(getCategoriesList),
};
