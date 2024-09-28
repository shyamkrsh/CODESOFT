const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'jobBoard',
        allowedFormats: ["png", "jpg", "jpeg"],
      },
})

const storage2 = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'resume',
        allowedFormats: ["txt", "pdf"],
      },
})

module.exports = {
    cloudinary,
    storage,
    storage2,
}