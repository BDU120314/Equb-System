const express = require("express");
const groupMemberRouter = express.Router();
const {
  createGroupMember,
  getAllGroupMembers,
  getGroupMemberById,
  updateGroupMember,
  deleteGroupMember,
} = require("../controller/groupMemberController");

// GroupMember Routes
groupMemberRouter.post("/", createGroupMember);

groupMemberRouter.get("/:groupMemberId", getGroupMemberById);

groupMemberRouter.get("/", getAllGroupMembers);

groupMemberRouter.put("/:groupMemberId", updateGroupMember);

groupMemberRouter.delete("/:groupMemberId", deleteGroupMember);

module.exports = groupMemberRouter;
