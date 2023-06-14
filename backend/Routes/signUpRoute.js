const express = require("express");
const signUpRouter = express.Router();
const { signUpController } = require("../controller/signUpController");

signUpRouter.post("/", signUpController);

module.exports = signUpRouter;
