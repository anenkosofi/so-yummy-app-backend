const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers/HttpError");

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId) {
    next(HttpError(404, `${id} is not valid id`));
  }
  next();
};

module.exports = validateId;
