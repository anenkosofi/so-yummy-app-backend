const { ShoppingList } = require("../../models");

const deleteIngridients = async (req, res) => {
  const { userId } = req.params;
  const result = await Shopping.findByIdAndRemove(userId);
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    })
}

module.exports = deleteIngridients;