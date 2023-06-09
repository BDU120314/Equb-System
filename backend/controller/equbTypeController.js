
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

// Get all EqubTypes with pagination
const getAllEqubTypes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 8;

    const totalEqubTypes = await EqubType.countDocuments();
    const totalPages = Math.ceil(totalEqubTypes / pageSize);
    const skip = (page - 1) * pageSize;

    const equbTypes = await EqubType.find().skip(skip).limit(pageSize);

    res.json({
      equbTypes,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve EqubTypes" });
  }
};

// Get EqubType by ID
const getEqubTypeById = async (req, res) => {
  try {
    const equbType = await EqubType.findById(req.params.id);
    if (!equbType) {
      return res.status(404).json({ error: "EqubType not found" });
    }
    console.log("equb types are muller :   ", equbType);
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

// Search EqubTypes with pagination
const searchEqubTypes = async (req, res) => {
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
      conditions.push({ number_of_members: { $eq: parseInt(members) } });
    }

    const query = conditions.length > 0 ? { $and: conditions } : {};

    const totalCount = await EqubType.countDocuments(query);
    const totalPages = Math.ceil(totalCount / pageSize);

    const searchResult = await EqubType.find(query)
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
  getAllEqubTypes,
  createEqubType,
  getEqubTypeById,
  updateEqubType,
  searchEqubTypes,
  deleteEqubType,
};
