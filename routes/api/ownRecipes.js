const express = require("express");
const { ownRecipes } = require("../../controllers");
const { authenticate } = require("../../middlewares");
const { validation } = require("../../middlewares");


const router = express.Router();

router.get("/", authenticate,ownRecipes.getAllRecipes);

router.post(
    "/",
    authenticate,
    validation(),
    ownRecipes.addRecipe
  );


router.delete("/:id", authenticate, ownRecipes.deleteRecipe);

module.exports = router;