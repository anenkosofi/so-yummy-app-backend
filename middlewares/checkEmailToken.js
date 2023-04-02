const jwt = require("jsonwebtoken");
const { PASSWORD } = process.env;

const { User } = require("../models");
const { HttpError } = require("../helpers/HttpError");

const checkEmailToken = async (req, res, next) => {
  const { token = "" } = req.query;
  if (!token) {
    next(HttpError(401, "Not authorized"));
    return null;
  }
  try {
    const { _id, email } = jwt.verify(token, PASSWORD);

    const user = await User.findOne({
      _id,
      subscriptionToken: token,
    });
    if (!user) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      if (error.message === "jwt expired") {
        error.message = "Confirmation token is expired";
      } else error.message = "Token error: " + error.message;
    }
    next(HttpError(401, error.message));
  }
};

module.exports = checkEmailToken;
