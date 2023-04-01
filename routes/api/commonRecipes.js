const express = require("express");

const { commonRecipes } = require("../../controllers");
const { categories } = require("../../controllers");

const router = express.Router();

router.get("/category-list", categories.getCategoriesList);

router.get("/main-page", commonRecipes.getCategoryRecipes);

router.get("/:category", commonRecipes.getRecipesByCategory);

router.get("/:id", commonRecipes.getRecipeById);

router.get("/:title", commonRecipes.getRecipesByTitle);

router.get("/:ingredients", commonRecipes.getRecipesByIngredients);

module.exports = router;
