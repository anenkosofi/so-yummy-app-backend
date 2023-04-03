// const multer = require("multer"); 
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
// }); 

// const avatarStorage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: (req, file) => {
//         const avatarName = `${req.user._id}_avatar`;
//         return {
//             folder: 'avatars',
//             allowedFormats: ['jpg', 'jpeg', 'png', 'gif'],
//             public_id: avatarName,
//             transformation: [
//                 {
//                     width: 103,
//                     height: 103,
//                     crop: 'fill',
//                     gravity: 'face',
//                 },
//             ],   
//         }
//     }
// },); 

// const fileFilter = (req, file, cd) => {
//   if (
//     file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/png" ||
//        file.mimetype === "image/gif" ||
//     file.mimetype === "image/jpg"
//   ) {
//     cd(null, true);
//   } else {
//     cd({ message: "Unsupported file format. Must be jpeg, png, jpg or gif" }, false);
//   }
// };

// const uploadCloud = multer({
//   avatarStorage,
//   fileFilter: fileFilter,
// });

// module.exports = {
//     uploadCloud: uploadCloud.single("avatar"),
// }; 

const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
}); 



const cloudinaryUpload = (name, path) => {
  const publicId = `${name}_photo_${uuidv4()}`;
  const image = cloudinary.uploader.upload(path, { public_id: publicId });

  return image
    .then(data => {
        const url = cloudinary.url(publicId, {
            width: 103,
            height: 103,
            crop: 'fill',
            gravity: 'face',
        }); 
      return url;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = cloudinaryUpload;




// const multer = require("multer");
// const cloudinary = require("cloudinary");
// const { ServiceUnavailable} = require("http-errors");
// const dotenv = require("dotenv");
// dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
// }); 

// const memoryStorage = multer.memoryStorage();

// const uploadCloud = multer({
//   storage: memoryStorage,
// });


// const uploadToCloudinary = async (fileString, format) => {
//   try {
//     const dataString = `data:image/${format};base64,${fileString}`;
//       const res = await cloudinary.uploader.upload(dataString, {
//           folder: "avatars",
//           transformation: {
//               width: 103,
//               height: 103,
//               crop: 'fill',
//               gravity: 'face',
//           },
//       }); 
//     return res;
//   } catch (error) {
//     throw new ServiceUnavailable("Something went wrong");
//   }
// };

// const deleteFromCloudinary = async (avatarCloudId) => {
//   await cloudinary.uploader.destroy(avatarCloudId, (err, result) => {
//     console.log(err, result);
//   });
// };


// module.exports = {
//     uploadCloud,
//     uploadToCloudinary,
//     deleteFromCloudinary,
// }