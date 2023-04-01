const express = require("express");

const { commonRecipes } = require("../../controllers");
const { categories } = require("../../controllers");

const { authenticate, validateId } = require("../../middlewares");

const router = express.Router();

router.get("/category-list", categories.getCategoriesList);

router.get("/main-page", commonRecipes.getCategoryRecipes);

router.get("/:category", commonRecipes.getRecipesByCategory);

router.get("/title/:query", authenticate, commonRecipes.getRecipesByTitle);

router.get(
  "/ingredient/:query",
  authenticate,
  commonRecipes.getRecipesByIngredients
);

module.exports = router;
