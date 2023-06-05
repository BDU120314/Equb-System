const express = require("express");
const logInRouter = express.Router();
const {
  loginController,
  logoutController,
} = require("../controller/logInController");

// Login route
logInRouter.post("/", loginController);

// Logout route
logInRouter.post("/", logoutController);

module.exports = logInRouter;
