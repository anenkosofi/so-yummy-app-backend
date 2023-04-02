const { User, joiRegisterSchema, joiLoginSchema } = require("./user");
const { CommonRecipe, addFavoriteSchema } = require("./commonRecipe");
const OwnRecipe = require("./ownRecipe");
const Ingredient = require("./ingredient");

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  CommonRecipe,
  OwnRecipe,
  Ingredient,
  addFavoriteSchema,
};
