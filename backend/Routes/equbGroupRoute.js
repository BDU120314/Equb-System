const express = require("express");
const equbGroupRouter = express.Router();
const {
  getAllGroups,
  createGroup,
  getGroupById,
  updateGroup,
  deleteGroup,
} = require("../controller/equbGroupController");

// Group Routes
equbGroupRouter.post("/groups", createGroup);

equbGroupRouter.get("/groups/:groupId", getGroupById);

equbGroupRouter.get("/groups", getAllGroups);

equbGroupRouter.put("/groups/:groupId", updateGroup);

equbGroupRouter.delete("/groups/:groupId", deleteGroup);

module.exports = equbGroupRouter;
