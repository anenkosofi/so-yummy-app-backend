const { Schema, model } = require("mongoose");

const shoppingListSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
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

const ShoppingList = model("shoppinglist", shoppingListSchema);

module.exports = ShoppingList;
