const express = require('express')
const router = express.Router()

const { shoppingList: controllers } = require("../../controllers");

router.post('/',  controllers.addIngridient);
router.delete('/:id', controllers.deleteIngridient)
router.get('/',  controllers.getIngridients)


module.exports = router;