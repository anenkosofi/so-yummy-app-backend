const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudinaryUpload = (filename, path) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      {
        public_id: `avatars/${filename}`,
        width: 103,
        height: 103,
        crop: 'fill',
        gravity: 'face',
      },
      (error, result) => {
        if (error) {
          // console.log("Cloudinary error:", error);
          reject(error);
        } else {
          // console.log("Cloudinary response:", result);
          const avatarURL = result.secure_url;
          resolve(avatarURL);
        }
      }
    );
  });
};

module.exports = cloudinaryUpload;