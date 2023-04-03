const { OwnRecipe } = require("../../../models");

const getAllRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await OwnRecipe.find({ _id: owner })
  res.json(result);
};

module.exports = getAllRecipes;
