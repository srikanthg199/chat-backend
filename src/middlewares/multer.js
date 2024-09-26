const multer = require("multer");
const path = require("path");

// const upload = multer({ dest: "uploads/" });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(/fileD/, file);
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${Date.now()}-${originalname}`);
    },
});

// const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const extname = allowedFileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
    }
};

const upload = multer({
    // storage,
    // fileFilter,
    limits: { fieldSize: 100000000, files: 2 },
});

const singleAvatar = upload.single("avatar")

module.exports = { singleAvatar };
