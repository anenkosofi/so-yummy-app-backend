const validation = require("./validateBody");
const authenticate = require("./authenticate");
const checkEmailToken = require("./checkEmailToken");

module.exports = {
  validation,
  authenticate,
  checkEmailToken,
};
