const { OwnRecipe } = require("../../../models");

const getAllRecipes = async (req, res) => {
  const { _id: owner } = req.user;

  const recipes = await OwnRecipe.find({ owner });

  res.json({
    status: "success",
    code: 200,
    recipes,
  });
};

module.exports = getAllRecipes;
