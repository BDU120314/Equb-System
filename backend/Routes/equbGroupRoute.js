const express = require("express");
const equbGroupRouter = express.Router();
<<<<<<< HEAD
const { createEqubGroup, getAllEqubGroups, updateEqubGroup, deleteEqubGroup, searchEqubGroup, getEqubGroupById } = require("../controller/equbGroupController");

equbGroupRouter.post("/", createEqubGroup);

 equbGroupRouter.get("/search", searchEqubGroup); //placed before getById top to bottom
 equbGroupRouter.get("/:id", getEqubGroupById);
=======
const { createEqubGroup, getAllEqubGroups, updateEqubGroup, deleteEqubGroup, searchEqubGroup, checkUserInEqubGroup, addUserToEqubGroup } = require("../controller/equbGroupController");

equbGroupRouter.post("/", createEqubGroup);

equbGroupRouter.get("/search", searchEqubGroup); //placed before getById top to bottom
equbGroupRouter.get("/check/:userId/:equbGroupId", checkUserInEqubGroup); //placed before getById top to bottom
equbGroupRouter.post("/join/:userId/:equbGroupId", addUserToEqubGroup); //placed before getById top to bottom

>>>>>>> 2f573a1a4fae43b13c54dc756abf3c50cc7ed007
equbGroupRouter.get("/", getAllEqubGroups);


equbGroupRouter.put("/:equbGroupId", updateEqubGroup);

equbGroupRouter.delete("/:equbGroupId", deleteEqubGroup);

module.exports = equbGroupRouter;
