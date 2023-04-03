const { User } = require("../../models");
const {cloudinaryUpload } = require("../../middlewares");


const updateUser = async (req, res) => {
    const { _id } = req.user; 
    const { name } = req.body; 
    const { path, filename } = req.file;
    
    const avatarURL = await cloudinaryUpload(filename, path);

  const user = await User.findByIdAndUpdate(_id, { avatarURL, name });
    res.json({
        accessToken: user.accessToken,
        user: {
             name,
            avatarURL,
        }
    });
};

module.exports = updateUser; 
    
