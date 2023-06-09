const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../middlewares/uploadCloud");
const { User } = require("../../models");

const updateAvatarToCloud = async (req, res, next) => {
  const { file } = req;
  const { _id, avatarCloudId: avatarExists } = req.user;

  if (avatarExists) {
    await deleteFromCloudinary(avatarExists);
  }

  const fileFormat = file.mimetype.split("/")[1];

  const { public_id: avatarCloudId, secure_url: avatarURL } =
    await uploadToCloudinary(fileFormat);

  await User.findByIdAndUpdate(
    _id,
    { avatarURL: avatarURL, avatarCloudId },
    { new: true }
  );

  res.json({
    status: "success",
    message: "Upload successful",
    data: {
      avatarCloudId,
      avatarURL,
    },
  });
};

module.exports = updateAvatarToCloud;