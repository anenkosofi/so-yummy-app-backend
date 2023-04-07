const jwt = require("jsonwebtoken");
const { Forbidden, BadRequest } = require("http-errors");
const { User } = require("../../models");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const refresh = async (req, res, next) => {
  const { refreshToken: token } = req.body;
  let tokens = {};
  let userId = '';
  try {
    const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
    const user = await User.findById(id);
    if (user.refreshToken !== token) {
      throw new BadRequest("Your token is invalid");
    }

    const payload = {
      id,
    };

    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {
      expiresIn: "2h",
    });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {
      expiresIn: "7d",
    });

    userId = id; 
    tokens = {
      accessToken, 
      refreshToken,
    }
    
  } catch (error) {
    throw new Forbidden("Access Denied. Please try logging in again");
  }
  await User.findByIdAndUpdate(userId, { ...tokens });
  
    res.status(201).json({
     ...tokens
    });
}; 

module.exports = refresh;
