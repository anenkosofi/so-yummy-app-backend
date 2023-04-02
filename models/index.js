
const {User, joiRegisterSchema, joiLoginSchema, refreshSchema, updateUserSchema} = require("./user");
const CommonRecipe = require("./commonRecipe");

const { User, joiRegisterSchema, joiLoginSchema } = require("./user");
const { CommonRecipe, addFavoriteSchema } = require("./commonRecipe");
const OwnRecipe = require("./ownRecipe");
const Ingredient = require("./ingredient");

module.exports = {

    User,
    joiRegisterSchema,
    joiLoginSchema,
    refreshSchema,
    updateUserSchema,
    CommonRecipe,
    OwnRecipe,
    Ingredient,
}; 

  User,
  joiRegisterSchema,
  joiLoginSchema,
  CommonRecipe,
  OwnRecipe,
  Ingredient,
  addFavoriteSchema,
};

