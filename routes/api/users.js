const express = require("express"); 

const { auth: controllers } = require("../../controllers");

const router = express.Router(); 

router.post("/register", controllers.register); 

module.exports = router; 