const multer = require("multer"); 
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
}); 

const avatarStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'avatars',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
    transformation: [
        {
            width: 103,
            height: 103,
            crop: 'fill',
            gravity: 'face',
        },
    ],
      filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
},
); 

const uploadCloud = multer({ avatarStorage }); 

module.exports = uploadCloud; 