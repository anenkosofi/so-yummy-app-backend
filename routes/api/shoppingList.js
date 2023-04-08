const express = require("express");
const router = express.Router();

const { shoppingList: controllers } = require("../../controllers");
const { authenticate } = require("../../middlewares");
const { validation } = require("../../middlewares");
const { addIngredientsSchema } = require("../../models");

router.post("/", authenticate, controllers.addIngredients);
router.delete(
  "/:id",
  authenticate,
  validation(addIngredientsSchema),
  controllers.deleteIngredients
);
router.get("/", authenticate, controllers.getIngredients);


module.exports = router;
