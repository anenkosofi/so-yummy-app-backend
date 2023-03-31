const { Schema, model } = require("mongoose");

const commonIngredientSchema = Schema(
  {
    ttl: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thb: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ingredient = model("ingredient", commonIngredientSchema);

module.exports = Ingredient;
