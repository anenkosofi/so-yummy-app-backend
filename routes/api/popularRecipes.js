const express = require("express");

const { popularRecipes: controllers } = require("../../controllers");

const router = express.Router();

router.get("/", controllers.getPopularRecipes);

module.exports = router;
