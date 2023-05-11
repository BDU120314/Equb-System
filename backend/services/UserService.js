const equbUserModel = require("../model/equbUserModels");

const createEqubUser = async (user) => {
  return await equbUserModel.create(user);
};

const getEqubUserById = async (id) => {
  return await equbUserModel.findById(id);
};

const updateEqubUser = async (id, user) => {
  return await equbUserModel.findByIdAndUpdate(id, user);
};

const deleteEqubUser = async (id) => {
  return await equbUserModel.findByIdAndDelete(id);
};

module.exports = {
  createEqubUser,
  getEqubUserById,
  updateEqubUser,
  deleteEqubUser,
};
