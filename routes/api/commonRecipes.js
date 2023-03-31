const express = require("express");

const { commonRecipes } = require("../../controllers");
const { categories } = require("../../controllers");

const router = express.Router();

router.get("/category-list", categories.getCategoriesList);

router.get("/main-page", commonRecipes.getCategoryRecipes);

router.get("/:category", commonRecipes.getRecipesByCategory);

module.exports = router;
