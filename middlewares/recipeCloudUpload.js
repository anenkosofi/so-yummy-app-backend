const cloudinary = require("cloudinary").v2;
const fs = require("fs");

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const recipeImageUpload = (filename, path) => {
  return new Promise((resolve, reject) => {
   cloudinary.uploader.upload(
    path,
      {
        public_id: `recipes/${filename}`,
        folder: "recipes",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          const imageURL = result.secure_url;
          fs.unlink(path, (err) => {
            if (err) {
              console.error(err);
            }
          });
          resolve(imageURL);
        }
      }
    );
  });
};

module.exports = recipeImageUpload;