const EqubGroup = require("../model/EqubGroup");


const createEqubGroup = async (req, res) => {
  try {
    const equbTypeData = req.body;
    const equbType = new EqubGroup(equbTypeData);
    const savedEqubType = await equbType.save();
    res.status(201).json(savedEqubType);
  } catch (error) {
    res.status(500).json({ error: "Failed to create EqubGroup" });
  }
};

// Get all EqubTypes with pagination
const getAllEqubGroups = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 8;

    const totalEqubTypes = await EqubGroup.countDocuments();
    const totalPages = Math.ceil(totalEqubTypes / pageSize);
    const skip = (page - 1) * pageSize;

    const equbTypes = await EqubGroup.find().skip(skip).limit(pageSize);

    res.json({
      equbTypes,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve EqubGroups" });
  }
};

// Get EqubType by ID
const getEqubGroupById = async (req, res) => {
  try {
    const equbType = await EqubGroup.findById(req.params.id);
    if (!equbType) {
      return res.status(404).json({ error: "EqubGroup not found" });
    }
    console.log("equb types are muller :   ", equbType);
    res.json(equbType);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve EqubType" });
  }
};

/// Update EqubType
const updateEqubGroup = async (req, res) => {
  try {
    const equbTypeData = req.body;
    const updatedEqubType = await EqubGroup.findByIdAndUpdate(
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
const deleteEqubGroup = async (req, res) => {
  try {
    const deletedEqubType = await EqubGroup.findByIdAndRemove(
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

// Search EqubTypes with pagination
const searchEqubGroup = async (req, res) => {
  try {
    const { type, amount, members, page, pageSize } = req.query;
    const conditions = [];

    if (type) {
      conditions.push({ equb_type_name: { $regex: new RegExp(type, "i") } });
    }

    if (amount) {
      conditions.push({ amount_of_deposit: { $eq: parseInt(amount) } });
    }

    if (members) {
      conditions.push({ total_Members: { $eq: parseInt(members) } });
    }

    const query = conditions.length > 0 ? { $and: conditions } : {};

    const totalCount = await EqubGroup.countDocuments(query);
    const totalPages = Math.ceil(totalCount / pageSize);

    const searchResult = await EqubGroup.find(query)
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      searchResult,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to search Equb Types" });
  }
};


module.exports = {
  getAllEqubGroups,
  createEqubGroup,
  getEqubGroupById,
  updateEqubGroup,
  searchEqubGroup,
  deleteEqubGroup,
};
