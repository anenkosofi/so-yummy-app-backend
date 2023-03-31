const express = require("express");

const {
  recipes: controllers,
} = require("../../controllers/recipes/commonRecipes");

const router = express.Router();

router.get("/recipes/:category", controllers.getRecipesByCategory);

module.exports = router;
