const express = require("express");

const { auth: controllers } = require("../../controllers");
const {
  authenticate,
  validation,
  passport,
  upload,
} = require("../../middlewares");
const {
  joiRegisterSchema,
  joiLoginSchema,
  refreshSchema,
  updateUserSchema,
  subscribeUserSchema,
} = require("../../models");

const router = express.Router();

// auth routes
router.post("/register", validation(joiRegisterSchema), controllers.register);
router.post("/login", validation(joiLoginSchema), controllers.login);
router.post("/logout", authenticate, controllers.logout);
router.post("/refresh", validation(refreshSchema), controllers.refresh);

// google auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  controllers.googleAuth
);

// user routes
router.get("/current", authenticate, controllers.getCurrent);
router.patch(
  "/update",
  authenticate,
  upload.single("avatar"),
  validation(updateUserSchema),
  controllers.updateUser
);
// router.post("/subscribe", authenticate, controllers.addSubscription);
router.post(
  "/subscribe",
  authenticate,
  validation(subscribeUserSchema),
  controllers.sendSubscriptionEmail
);

module.exports = router;
