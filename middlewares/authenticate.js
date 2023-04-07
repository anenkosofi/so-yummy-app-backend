const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../models"); 

const {ACCESS_SECRET_KEY } = process.env; 

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, accessToken] = authorization.split(" ");
    try {
        if (!accessToken || bearer !== "Bearer") {
            throw new Unauthorized("User is not authorized");
        }
          const { id } = jwt.verify(accessToken, ACCESS_SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.accessToken || user.accessToken !== accessToken) {
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

