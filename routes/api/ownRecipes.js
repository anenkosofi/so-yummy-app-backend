const express = require("express");
const router = express.Router();

const { ownRecipes } = require("../../controllers");
const { authenticate } = require("../../middlewares");
const { validation } = require("../../middlewares");
const {addOwnSchema} = require("../../models/ownRecipe")



router.get("/", authenticate, ownRecipes.getAllRecipes);

router.post(
    "/",
    authenticate,
    validation(addOwnSchema),
    ownRecipes.addRecipe
  );


router.delete("/:id", authenticate, ownRecipes.deleteRecipe);

module.exports = router;