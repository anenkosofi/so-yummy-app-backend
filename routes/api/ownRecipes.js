const express = require("express");
const router = express.Router();


const {getAllRecipes} = require("../../controllers/recipes/ownRecipes");
const {addRecipe} = require("../../controllers/recipes/ownRecipes");
const {deleteRecipe} = require("../../controllers/recipes/ownRecipes");
const { authenticate } = require("../../middlewares");
const { validation } = require("../../middlewares");
const {addOwnSchema} = require("../../models/ownRecipe")



router.get("/", authenticate, getAllRecipes);

router.post(
    "/",
    authenticate,
    validation(addOwnSchema),
    addRecipe
  );


router.delete("/:id", authenticate, deleteRecipe);

module.exports = router;