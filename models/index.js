const {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  refreshSchema,
  updateUserSchema,
} = require("./user");
const { CommonRecipe, addFavoriteSchema } = require("./commonRecipe");
const { OwnRecipe, addOwnSchema } = require("./ownRecipe");
const Ingredient = require("./ingredient");
const { ShoppingList, addIngredientsSchema } = require("./shoppingList");

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  refreshSchema,
  updateUserSchema,
  CommonRecipe,
  addFavoriteSchema,
  OwnRecipe,
  addOwnSchema,
  Ingredient,
  ShoppingList,
  addIngredientsSchema,
};
