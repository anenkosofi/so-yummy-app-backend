const validation = require("./validateBody");
const authenticate = require("./authenticate");
const passport = require("./googleAuthenticate"); 
const uploadCloud = require("./uploadCloud");


module.exports = {
    validation, 
    authenticate,
    passport,
    uploadCloud, 
}
const validateId = require("./validateId");

module.exports = {
  validation,
  authenticate,
  validateId,
};
