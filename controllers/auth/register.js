const { User } = require("../../models");

const register = async (req, res) => {
    const body = req.body;
    // const { email } = body;
    // const user = await User.findOne({ email });
    const newUser = await User.create(body);

    res.status(201).json({
        user: {
            newUser,
        },
    });
};

module.exports = register; 