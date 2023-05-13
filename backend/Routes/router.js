const express = require("express");
const {
  getEqubUser,
  createEqubUser,
  updateEqubUser,
  deleteEqubUser,
} = require("../controller/equbController");
const userRouter = express.Router();

// get files

userRouter.get("/", getEqubUser);

//creating files
userRouter.post("/", createEqubUser);

//updating request

userRouter.patch("/:id", updateEqubUser);

//delete requests

userRouter.delete("/:id", deleteEqubUser);

// router.patch("/update/:id", updateEqub);

//delete requests

// router.delete("/delete/:id", deleteEqub);

module.exports = userRouter;
