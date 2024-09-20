const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads')); // Pastikan folder yang benar digunakan
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // Contoh: 5MB maksimal ukuran file
  }
});

module.exports = upload;
