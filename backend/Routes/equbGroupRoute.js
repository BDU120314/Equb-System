const express = require("express");
const equbGroupRouter = express.Router();
const { createEqubGroup, getAllEqubGroups, updateEqubGroup, deleteEqubGroup, searchEqubGroup } = require("../controller/equbGroupController");

equbGroupRouter.post("/", createEqubGroup);

equbGroupRouter.get("/search", searchEqubGroup); //placed before getById top to bottom

equbGroupRouter.get("/", getAllEqubGroups);

equbGroupRouter.put("/:equbGroupId", updateEqubGroup);

equbGroupRouter.delete("/:equbGroupId", deleteEqubGroup);

module.exports = equbGroupRouter;
