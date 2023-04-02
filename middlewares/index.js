const validation = require("./validateBody");
const authenticate = require("./authenticate");
const validateId = require("./validateId");
const passport = require("./googleAuthenticate");
const uploadCloud = require("./uploadCloud");

module.exports = {
  validation,
  authenticate,
  validateId,
  passport,
  uploadCloud,
};
