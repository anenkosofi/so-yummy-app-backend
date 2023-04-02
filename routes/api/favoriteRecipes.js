const express = require("express");
const router = express.Router();

const { favoriteRecipes } = require("../../controllers");
const { authenticate } = require("../../middlewares");
const { validation } = require("../../middlewares");
const { addFavoriteSchema } = require("../../models/commonRecipe");

router.get("/", authenticate, favoriteRecipes.getFavoriteRecipes);

router.post(
  "/",
  authenticate,
  validation(addFavoriteSchema),
  favoriteRecipes.addToFavoriteRecipes
);

router.delete("/:id", authenticate, favoriteRecipes.deleteFromFavoriteRecipes);

module.exports = router;
