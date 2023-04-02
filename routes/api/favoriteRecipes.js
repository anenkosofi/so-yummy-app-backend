const express = require("express");
const router = express.Router();

const { favoriteRecipes } = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, favoriteRecipes.getFavoriteRecipes);

router.post("/", authenticate, favoriteRecipes.addToFavoriteRecipes);

router.delete("/:id", authenticate, favoriteRecipes.deleteFromFavoriteRecipes);

module.exports = router;
