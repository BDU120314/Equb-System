const express = require("express");
const {
  getEqubUser,
  getEqubUserById,
  createEqubUser,
  updateEqubUser,
  deleteEqubUser,
} = require("../controller/equbController");

const upload = require("../config/multer");

const userRouter = express.Router();

const userSchema = require("../middleware/validation-middleware");

userRouter.get("/get", getEqubUser);

userRouter.get("/get/:id", getEqubUserById);

userRouter.post("/create", upload.array("ID", 8), createEqubUser);

userRouter.patch("/update/:id", upload.array("ID", 8), updateEqubUser);

userRouter.delete("/delete/:id", deleteEqubUser);

module.exports = userRouter;
