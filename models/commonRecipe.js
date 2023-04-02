const { Schema, model } = require("mongoose");
const Joi = require("joi");

const addFavoriteSchema = Joi.object({
  title: Joi.string().required(),
  favorite: Joi.boolean().optional(),
});

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
    area: {
      type: String,
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
    thumb: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    },
    favorites: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        }, // not sure
      ],
      required: true,
    },
    likes: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        }, // not sure
      ],
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const CommonRecipe = model("commonrecipe", recipeSchema);

module.exports = {
  CommonRecipe,
  addFavoriteSchema,
};
