const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/equbController");
const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
