const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../models"); 

const {ACCESS_SECRET_KEY } = process.env; 

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    try {
        if (!token || bearer !== "Bearer") {
            throw new Unauthorized("User is not authorized");
        }
          const { id } = jwt.verify(token, ACCESS_SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.accessToken) {
            throw new Unauthorized("User is not authorized");
        }
        req.user = user;
        next();
    } catch (error) {
        if (error.message === "invalid signature") {
            error.status = 401;
        }
        next(error);
    }
};

module.exports = authenticate; 