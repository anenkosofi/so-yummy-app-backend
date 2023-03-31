const { Schema, model } = require("mongoose");

// I am not sure aboy this schema, may be there is someyhing to add
const ingredientSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
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
      type: [ingredientSchema],
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

const Recipe = model("myrecipe", recipeSchema);

module.exports = Recipe;
