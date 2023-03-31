const express = require("express");

const { categories: controllers } = require("../../controllers");

const router = express.Router();

router.get("/category-list", controllers.getCategoriesList);

module.exports = router;
