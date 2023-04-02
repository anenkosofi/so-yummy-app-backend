const { User } = require("../../models");
const { Unauthorized } = require('http-errors'); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env; 

const login = async (req, res) => {
    const body = req.body;
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new Unauthorized("Email or password is wrong");
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        throw new Unauthorized('Email or password is wrong');
    }
    const payload = {
        id: user._id,
    };
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: '2h' });
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, { expiresIn: '7d' });
    await User.findByIdAndUpdate(user._id, { accessToken, refreshToken });
    res.status(201).json({
        status: 'success',
        accessToken,
        refreshToken,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
    
        },
    });
}; 

module.exports = login; 