const express = require("express");
const equbTypeRouter = express.Router();
const {
  getAllEqubTypes,
  createEqubType,
  getEqubTypeById,
  updateEqubType,
  deleteEqubType,
} = require("../controller/equbTypeController");

equbTypeRouter.post("/equb-types", createEqubType);

equbTypeRouter.get("/equb-types/:equbTypeId", getEqubTypeById);

equbTypeRouter.get("/equb-types", getAllEqubTypes);

equbTypeRouter.put("/equb-types/:equbTypeId", updateEqubType);
equbTypeRouter.delete("/equb-types/:equbTypeId", deleteEqubType);

module.exports = equbTypeRouter;
