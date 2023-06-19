const express = require("express");
const equbGroupRouter = express.Router();
const { createEqubGroup, getAllEqubGroups, updateEqubGroup, deleteEqubGroup, searchEqubGroup, checkUserInEqubGroup, addUserToEqubGroup } = require("../controller/equbGroupController");

equbGroupRouter.post("/", createEqubGroup);

equbGroupRouter.get("/search", searchEqubGroup); //placed before getById top to bottom
equbGroupRouter.get("/check/:userId/:equbGroupId", checkUserInEqubGroup); //placed before getById top to bottom
equbGroupRouter.post("/join/:userId/:equbGroupId", addUserToEqubGroup); //placed before getById top to bottom

equbGroupRouter.get("/", getAllEqubGroups);

equbGroupRouter.put("/:equbGroupId", updateEqubGroup);

equbGroupRouter.delete("/:equbGroupId", deleteEqubGroup);

module.exports = equbGroupRouter;
