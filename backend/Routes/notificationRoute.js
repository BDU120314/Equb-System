const express = require("express");
const notificationRouter = express.Router();
const notificationController = require("../controllers/notificationController");
const authMiddleware = require("../middlewares/authMiddleware"); //for handling user authentication

notificationRouter.get(
  "/",
  authMiddleware,
  notificationController.getNotifications
);
notificationRouter.patch(
  "/:id",
  authMiddleware,
  notificationController.markAsRead
);

module.exports = notificationRouter;
