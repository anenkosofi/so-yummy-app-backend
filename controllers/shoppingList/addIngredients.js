const { ShoppingList } = require("../../models");

const addIngridients = async (req, res) => {

  const ingredient = await ShoppingList.create(req.body);
  res.json({
      status: "success",
      code: 200,
      data: {
        ingredient,
      },
     })
}

module.exports = addIngridients;