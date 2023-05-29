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
groupMemberRouter.post("/groupMembers", createGroupMember);

groupMemberRouter.get("/groupMembers/:groupMemberId", getGroupMemberById);

groupMemberRouter.get("/groupMembers", getAllGroupMembers);

groupMemberRouter.put("/groupMembers/:groupMemberId", updateGroupMember);

groupMemberRouter.delete("/groupMembers/:groupMemberId", deleteGroupMember);

module.exports = groupMemberRouter;
