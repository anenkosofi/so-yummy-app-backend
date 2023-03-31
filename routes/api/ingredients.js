const express = require("express");

const { ingredients: controllers } = require("../../controllers");

const router = express.Router();

router.get("/list", controllers.getIngredientsList);

module.exports = router;
