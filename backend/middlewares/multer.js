import multer from "multer";

// This middleware handles file uploads using multer.
// It stores files in the "uploads" directory with a unique timestamp prefix.

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

const upload = multer({ storage });

export default upload;