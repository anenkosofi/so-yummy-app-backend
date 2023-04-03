const express = require("express");

const { searchedRecipes: controllers } = require("../../controllers");

const router = express.Router();

router.get("/", controllers.getRecipesByTitleOrIngredients);

module.exports = router;
