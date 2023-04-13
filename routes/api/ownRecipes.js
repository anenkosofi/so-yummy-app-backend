const express = require("express");
const router = express.Router();

const { ownRecipes: controllers } = require("../../controllers");
const { authenticate, upload} = require("../../middlewares");
const { validation } = require("../../middlewares");
const { addOwnSchema } = require("../../models/ownRecipe");

router.get("/", authenticate, controllers.getAllRecipes);

router.get("/:id", authenticate, controllers.getRecipeById);

router.post("/", authenticate, validation(addOwnSchema), controllers.addRecipe);

router.delete("/:id", authenticate, controllers.deleteRecipe);

module.exports = router;
