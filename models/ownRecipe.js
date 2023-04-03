const { Schema, model } = require("mongoose");
const Joi = require("joi"); 

const addOwnSchema = Joi.object({
  owner: Joi.string().required(),
});

// schema for adding own recipes

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Beef",
        "Breakfast",
        "Chicken",
        "Dessert",
        "Goat",
        "Lamb",
        "Miscellaneous",
        "Pasta",
        "Pork",
        "Seafood",
        "Side",
        "Starter",
        "Vegan",
        "Vegetarian",
      ],
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    ingredients: {
      type: [
        {
          id: {
            type: Schema.Types.ObjectId,
            ref: "ingredient",
          },
          measure: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const OwnRecipe = model("ownRecipe", recipeSchema);

module.exports = {OwnRecipe, addOwnSchema};
