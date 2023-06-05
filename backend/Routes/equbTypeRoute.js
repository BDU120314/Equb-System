const express = require("express");
const equbTypeRouter = express.Router();
const {
  getAllEqubTypes,
  createEqubType,
  getEqubTypeById,
  updateEqubType,
  deleteEqubType,
  searchEqubTypes,
} = require("../controller/equbTypeController");

equbTypeRouter.post("/", createEqubType);

equbTypeRouter.get("/search", searchEqubTypes); //placed before getById top to bottom

// equbTypeRouter.get("/:equbTypeId", getEqubTypeById);

equbTypeRouter.get("/", getAllEqubTypes);

equbTypeRouter.put("/:equbTypeId", updateEqubType);

equbTypeRouter.delete("/:equbTypeId", deleteEqubType);

module.exports = equbTypeRouter;
