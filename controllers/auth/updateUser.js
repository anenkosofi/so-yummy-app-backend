const { User } = require("../../models");

const updateUser = async (req, res) => {
    const { _id, name } = req.body;
    const newAvatarUrl = req.file.path;
    if (!name) {
        await User.findByIdAndUpdate(_id, {
            avatarURL: newAvatarUrl,
        });
        res.json({
            newAvatarUrl,
        });
    }
    await User.findByIdAndUpdate(_id, { avatarURL: newAvatarUrl, name }, { new: true });
    res.json({
        name,
        newAvatarUrl,
    });

}; 
module.exports = updateUser