const cloudinary = require("cloudinary").v2;
const fs = require("fs");

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
          reject(error);
        } else {
          const avatarURL = result.secure_url;
          // Delete file from the temporary folder
          fs.unlink(path, (err) => {
            if (err) {
              console.error(err);
            }
          });
          resolve(avatarURL);
        }
      }
    );
  });
};

module.exports = cloudinaryUpload;