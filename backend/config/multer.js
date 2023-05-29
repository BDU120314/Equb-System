const multer = require("multer");

//assigning the uploads folder to DIR
const DIR = "./uploads";
/* 
Using uploads directory for the storage configuration of the files 
received by multer,
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toString() + "-" + file.orginalname);
    //toISOString
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jepg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    //reject file
    cb({ message: "Unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 4096 * 4096 },
  fileFilter: fileFilter,
});

module.exports = upload;
