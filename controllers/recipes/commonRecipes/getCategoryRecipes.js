const { CommonRecipe } = require("../../../models");

const getCategoryRecipes = async (req, res) => {
  const breakfastRecipes = await CommonRecipe.find({ category: "Breakfast" });
  breakfastRecipes.splice(4);
  const miscellaneousRecipes = await CommonRecipe.find({
    category: "Miscellaneous",
  });
  miscellaneousRecipes.splice(4);
  const chickenRecipes = await CommonRecipe.find({ category: "Chicken" });
  chickenRecipes.splice(4);
  const dessertsRecipes = await CommonRecipe.find({ category: "Dessert" });
  dessertsRecipes.splice(4);

  res.json({
    status: "success",
    code: 200,
    recipes: [
      {
        title: "Breakfast",
        recipes: breakfastRecipes,
      },
      {
        title: "Miscellaneous",
        recipes: miscellaneousRecipes,
      },
      {
        title: "Chicken",
        recipes: chickenRecipes,
      },
      {
        title: "Desserts",
        recipes: dessertsRecipes,
      },
    ],
  });
};

module.exports = getCategoryRecipes;
