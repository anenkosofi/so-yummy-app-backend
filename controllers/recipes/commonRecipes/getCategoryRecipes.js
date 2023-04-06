const { CommonRecipe } = require("../../../models");

const getCategoryRecipes = async (req, res) => {
  const { limit = 4 } = req.query;
  // How many recipes front get depending on window width
  const recipes = await CommonRecipe.find({
    category: ["Breakfast", "Miscellaneous", "Chicken", "Dessert"],
  });

  const breakfastRecipes = recipes.filter(
    (recipe) => recipe.category === "Breakfast"
  );
  breakfastRecipes.splice(limit);

  const miscellaneousRecipes = recipes.filter(
    (recipe) => recipe.category === "Miscellaneous"
  );
  miscellaneousRecipes.splice(limit);

  const chickenRecipes = recipes.filter(
    (recipe) => recipe.category === "Chicken"
  );
  chickenRecipes.splice(limit);

  const dessertsRecipes = recipes.filter(
    (recipe) => recipe.category === "Dessert"
  );
  dessertsRecipes.splice(limit);

  res.status(200).json({
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
