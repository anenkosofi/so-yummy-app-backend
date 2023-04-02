const express = require("express");

const { auth: controllers } = require("../../controllers");
const {
  authenticate,
  validation,
  checkEmailToken,
} = require("../../middlewares");
const { joiRegisterSchema, joiLoginSchema } = require("../../models");

const router = express.Router();
const schema = require("../../schemas/");

/* auth routes */
router.post("/register", validation(joiRegisterSchema), controllers.register);
router.post("/login", validation(joiLoginSchema), controllers.login);
router.post("/logout", authenticate, controllers.logout);

/* user routes */
router.get("/current", authenticate, controllers.getCurrent);

router.get("/user-data", authenticate, controllers.getUserData);
router.get("/subscribe", checkEmailToken, controllers.addSubscription);
router.post(
  "/subscribe",
  authenticate,
  validation(schema.subscribeUser),
  controllers.sendSubscriptionEmail
);

module.exports = router;
