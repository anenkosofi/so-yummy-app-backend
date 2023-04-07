const { User } = require("../../models");
const { cloudinaryUpload } = require("../../middlewares");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { name } = req.body;
  let avatarURL;

  if (req.file) {
    const { path, filename } = req.file;
    avatarURL = await cloudinaryUpload(filename, path);
  }

  const updatedFields = {};
  if (name) {
    updatedFields.name = name;
  }
  if (avatarURL) {
    updatedFields.avatarURL = avatarURL;
  }

  const options = { new: true, runValidators: true };
  const user = await User.findByIdAndUpdate(_id, updatedFields, options);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.status(200).json({
    accessToken: user.accessToken,
    user: {
      name: user.name,
      avatarURL: user.avatarURL,
    },
  });
};

module.exports = updateUser;