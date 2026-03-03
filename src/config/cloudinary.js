const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

// 1. Configurar credenciales de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// 2. Configurar el Storage para Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'flatcms_news', // Carpeta que se creará en tu Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp']
  }
});

// 3. Exportar el middleware
const upload = multer({ storage: storage });

module.exports = upload;