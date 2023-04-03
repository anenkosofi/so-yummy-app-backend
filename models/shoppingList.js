const { Schema, model } = require("mongoose");

const shoppingListSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      required: true,
    },
    measure: {
      type: String,
      required: true,
    },
    image: {
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

module.exports = ShoppingList;
