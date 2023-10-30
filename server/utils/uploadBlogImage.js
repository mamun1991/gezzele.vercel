const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "Blog",
    },
});

const uploadBlogImage = multer({ storage: storage });

module.exports = uploadBlogImage;
