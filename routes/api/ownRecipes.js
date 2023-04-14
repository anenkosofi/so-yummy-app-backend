const express = require("express");
const router = express.Router();

const { ownRecipes: controllers } = require("../../controllers");
const { authenticate, upload } = require("../../middlewares");
const { validation } = require("../../middlewares");
const { addOwnSchema } = require("../../models/ownRecipe");

router.get("/", authenticate, controllers.getAllRecipes);

router.post(
  "/",
  authenticate,
  upload.single("image"),
  validation(addOwnSchema),
  controllers.addRecipe
);

router.get("/:id", authenticate, controllers.getRecipeById);

router.delete("/:id", authenticate, controllers.deleteRecipe);

module.exports = router;
