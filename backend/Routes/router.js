const express = require("express");
const {
  getEqubUsers,
  getSingleUser,
  createEqubUser,
  updateEqubUser,
  deleteEqubUser,
} = require("../controller/equbController");
const userRouter = express.Router();

// get files

userRouter.get("/", getEqubUsers);

// get single files

userRouter.get("/:id", getSingleUser);

//creating files
userRouter.post("/", createEqubUser);

//updating request

userRouter.patch("/:id", updateEqubUser);

//delete requests

userRouter.delete("/:id", deleteEqubUser);

module.exports = userRouter;
