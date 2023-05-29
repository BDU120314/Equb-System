const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/equbController");
const userRouter = express.Router();

// get files

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

//creating files
userRouter.post("/", createUser);

//updating request

userRouter.put("/:id", updateUser);

//delete requests

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
