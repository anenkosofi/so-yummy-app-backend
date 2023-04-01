const express = require("express"); 

const { auth: controllers } = require("../../controllers");
const { authenticate, validation } = require("../../middlewares");
const { joiRegisterSchema, joiLoginSchema } = require("../../models");

const router = express.Router(); 

/* auth routes */
router.post("/register", validation(joiRegisterSchema), controllers.register); 
router.post("/login", validation(joiLoginSchema), controllers.login); 
router.post("/logout", authenticate, controllers.logout); 

/* user routes */
router.get("/current", authenticate, controllers.getCurrent); 

module.exports = router; 