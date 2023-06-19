const express = require("express");
const equbTypeRouter = express.Router();
const {
  getAllEqubTypes,
  createEqubType,
  getEqubTypeById,
  updateEqubType,
  deleteEqubType,
} = require("../controller/equbTypeController");

equbTypeRouter.post("/", createEqubType);

equbTypeRouter.get("/:id", getEqubTypeById);

equbTypeRouter.get("/", getAllEqubTypes);

equbTypeRouter.put("/:equbTypeId", updateEqubType);

equbTypeRouter.delete("/:equbTypeId", deleteEqubType);

module.exports = equbTypeRouter;
