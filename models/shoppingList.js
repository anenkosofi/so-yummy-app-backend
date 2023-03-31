const { Schema, model } = require("mongoose");

const shoppingListSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      require: true,
    },
    measure: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

const ShoppingList = model("shoppingList", shoppingListSchema);

module.exports = ShoppingList;
