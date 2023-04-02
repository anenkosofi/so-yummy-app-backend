const jwt = require("jsonwebtoken");
const { Forbidden } = require('http-errors');
const { User } = require("../../models");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const refresh = async (req, res) => {
    const { refreshToken: token } = req.body;
    try {
        const { id } = jwt.verify(token, REFRESH_SECRET_KEY);
        const isValid = await User.findOne({ refreshToken: token });
        if (!isValid) {
            throw new Forbidden("Your token is invalid")
        }

        const payload = {
            id,
        };
        const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '2h' });
        const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: '7d' });
        
        res.status(201).json({
            status: 'success',
            accessToken,
            refreshToken,
        });
        
    } catch (error) {
        throw new Forbidden("Access Denied. Please try logging in again")
    }
}; 

module.exports = refresh; 