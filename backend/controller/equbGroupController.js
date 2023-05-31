const EqubGroup = require("../model/EqubGroup");

// Create Group
const createGroup = async (req, res) => {
  try {
    const groupData = req.body;
    const group = new EqubGroup(groupData);
    const savedGroup = await group.save();
    res.status(201).json(savedGroup);
  } catch (error) {
    res.status(500).json({ error: "Failed to create Group" });
  }
};

// Get all Groups
const getAllGroups = async (req, res) => {
  try {
    const groups = await EqubGroup.find().populate("equb_type_id");
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Groups" });
  }
};

// Get Group by ID
const getGroupById = async (req, res) => {
  try {
    const group = await EqubGroup.findById(req.params.groupId).populate(
      "equb_type_id"
    );
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Group" });
  }
};

// Update Group
const updateGroup = async (req, res) => {
  try {
    const groupData = req.body;
    const updatedGroup = await EqubGroup.findByIdAndUpdate(
      req.params.groupId,
      groupData,
      { new: true }
    ).populate("equb_type_id");
    if (!updatedGroup) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: "Failed to update Group" });
  }
};

// Delete Group
const deleteGroup = async (req, res) => {
  try {
    const deletedGroup = await EqubGroup.findByIdAndRemove(
      req.params.groupId
    ).populate("equb_type_id");
    if (!deletedGroup) {
      return res.status(404).json({ error: "Group not found" });
    }
    res.json(deletedGroup);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete Group" });
  }
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup,
};
