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
equbGroupRouter.post("/", createGroup);

equbGroupRouter.get("/:groupId", getGroupById);

equbGroupRouter.get("/", getAllGroups);

equbGroupRouter.put("/:groupId", updateGroup);

equbGroupRouter.delete("/:groupId", deleteGroup);

module.exports = equbGroupRouter;
