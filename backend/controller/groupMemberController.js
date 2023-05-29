const GroupMember = require("../model/GroupMember");

// Create GroupMember
const createGroupMember = async (req, res) => {
  try {
    const groupMemberData = req.body;
    const groupMember = new GroupMember(groupMemberData);
    const savedGroupMember = await groupMember.save();
    res.status(201).json(savedGroupMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to create GroupMember" });
  }
};

// Get all GroupMembers
const getAllGroupMembers = async (req, res) => {
  try {
    const groupMembers = await GroupMember.find()
      .populate("group_id")
      .populate("user_id");
    res.json(groupMembers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve GroupMembers" });
  }
};

// Get GroupMember by ID
const getGroupMemberById = async (req, res) => {
  try {
    const groupMember = await GroupMember.findById(req.params.groupMemberId)
      .populate("group_id")
      .populate("user_id");
    if (!groupMember) {
      return res.status(404).json({ error: "GroupMember not found" });
    }
    res.json(groupMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve GroupMember" });
  }
};

// Update GroupMember
const updateGroupMember = async (req, res) => {
  try {
    const groupMemberData = req.body;
    const updatedGroupMember = await GroupMember.findByIdAndUpdate(
      req.params.groupMemberId,
      groupMemberData,
      { new: true }
    )
      .populate("group_id")
      .populate("user_id");
    if (!updatedGroupMember) {
      return res.status(404).json({ error: "GroupMember not found" });
    }
    res.json(updatedGroupMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to update GroupMember" });
  }
};

// Delete GroupMember
const deleteGroupMember = async (req, res) => {
  try {
    const deletedGroupMember = await GroupMember.findByIdAndRemove(
      req.params.groupMemberId
    )
      .populate("group_id")
      .populate("user_id");
    if (!deletedGroupMember) {
      return res.status(404).json({ error: "GroupMember not found" });
    }
    res.json(deletedGroupMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete GroupMember" });
  }
};

module.exports = {
  createGroupMember,
  getAllGroupMembers,
  getGroupMemberById,
  updateGroupMember,
  deleteGroupMember,
};
