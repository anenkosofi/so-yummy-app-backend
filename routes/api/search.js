const express = require("express");

const { commonRecipes } = require("../../controllers");

const { authenticate } = require("../../middlewares");

const router = express.Router();

// http://localhost:8080/api/search/title/query
router.get("/title/:query", authenticate, commonRecipes.getRecipesByTitle);

// http://localhost:8080/api/search/ingredient/query
router.get(
  "/ingredient/:query",
  authenticate,
  commonRecipes.getRecipesByIngredients
);

module.exports = router;