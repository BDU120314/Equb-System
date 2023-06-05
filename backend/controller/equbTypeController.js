const EqubType = require("../model/EqubType");

const createEqubType = async (req, res) => {
  try {
    const equbTypeData = req.body;
    const equbType = new EqubType(equbTypeData);
    const savedEqubType = await equbType.save();
    res.status(201).json(savedEqubType);
  } catch (error) {
    res.status(500).json({ error: "Failed to create EqubType" });
  }
};

// Get all EqubTypes
const getAllEqubTypes = async (req, res) => {
  try {
    
    const equbTypes = await EqubType.find()
    res.json(equbTypes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve EqubTypes" });
  }
};

// Get EqubType by ID
const getEqubTypeById = async (req, res) => {
  try {
    const equbType = await EqubType.findById(req.params.equbTypeId);
    if (!equbType) {
      return res.status(404).json({ error: "EqubType not found" });
    }
    res.json(equbType);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve EqubType" });
  }
};

/// Update EqubType
const updateEqubType = async (req, res) => {
  try {
    const equbTypeData = req.body;
    const updatedEqubType = await EqubType.findByIdAndUpdate(
      req.params.equbTypeId,
      equbTypeData,
      { new: true }
    );
    if (!updatedEqubType) {
      return res.status(404).json({ error: "EqubType not found" });
    }
    res.json(updatedEqubType);
  } catch (error) {
    res.status(500).json({ error: "Failed to update EqubType" });
  }
};

// Delete EqubType
const deleteEqubType = async (req, res) => {
  try {
    const deletedEqubType = await EqubType.findByIdAndRemove(
      req.params.equbTypeId
    );
    if (!deletedEqubType) {
      return res.status(404).json({ error: "EqubType not found" });
    }
    res.json(deletedEqubType);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete EqubType" });
  }
};

module.exports = {
  getAllEqubTypes,
  createEqubType,
  getEqubTypeById,
  updateEqubType,
  deleteEqubType,
};
