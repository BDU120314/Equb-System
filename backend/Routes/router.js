const express = require("express");
const {

  createEqubUser,
  updateEqubUser,
  deleteEqubUser,
} = require("../controller/equbController");

const upload = require("../config/multer");

const userRouter = express.Router();

const userSchema = require("../middleware/validation-middleware");


//delete requests

userRouter.delete("/:id", deleteEqubUser);

module.exports = userRouter;
