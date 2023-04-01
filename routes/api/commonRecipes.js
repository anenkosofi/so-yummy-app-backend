const express = require("express");

const { commonRecipes } = require("../../controllers");
const { categories } = require("../../controllers");

const { authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/category-list", authenticate, categories.getCategoriesList);

router.get("/main-page", authenticate, commonRecipes.getCategoryRecipes);

router.get("/:category", authenticate, commonRecipes.getRecipesByCategory);

router.get("/category/:category", commonRecipes.getRecipesByCategory);

router.get("/:id", commonRecipes.getRecipeById);

module.exports = router;
