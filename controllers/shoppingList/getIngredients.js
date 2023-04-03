const { ShoppingList } = require("../../models");

const getIngridients = async (req, res) => {
  const result = await ShoppingList.find({}, "-createdAt, -updatedAt");
  res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
  });
}

module.exports = getIngridients;