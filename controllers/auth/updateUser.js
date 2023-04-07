// const { User } = require("../../models");
// const { cloudinaryUpload } = require("../../middlewares");

// const updateUser = async (req, res) => {
//   const { _id } = req.user;
//   const { name } = req.body;
//   const { path, filename } = req.file;

//   const avatarURL = await cloudinaryUpload(filename, path);

//   const user = await User.findByIdAndUpdate(_id, { avatarURL, name });
//   res.status(200).json({
//     accessToken: user.accessToken,
//     user: {
//       name,
//       avatarURL,
//     },
//   });
// };

// module.exports = updateUser;

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
  if (name !== undefined) {
    updatedFields.name = name;
  }
  if (avatarURL) {
    updatedFields.avatarURL = avatarURL;
  }

  const user = await User.findByIdAndUpdate(_id, updatedFields, { new: true });
  res.status(200).json({
    accessToken: user.accessToken,
    user: {
      name: user.name,
      avatarURL: user.avatarURL,
    },
  });
};

module.exports = updateUser;