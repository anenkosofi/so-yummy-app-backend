const express = require('express')
const router = express.Router()


router.post('/', addIngridient);
router.delete('/:id', isValidId, deleteIngridient)
router.get('/', getIngridients)


module.exports = router;