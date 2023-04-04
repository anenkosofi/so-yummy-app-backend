const { Schema, model } = require("mongoose");
const Joi = require("joi");

const addIngredientsSchema = Joi.object({
  ingredient: Joi.string().required(),
  measure: Joi.string().required(),
});

const shoppingListSchema = new Schema(
  {
    ingredient: {
      type: Schema.Types.ObjectId,
      ref: "ingredient",
    },
    measure: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const ShoppingList = model("shoppinglist", shoppingListSchema);

module.exports = {
  ShoppingList,
  addIngredientsSchema,
};
