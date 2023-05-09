//creating users
const createEqub = async (req, res) => {
  await res.send("posting requests");
};

//Geting equb user

const getEqub = async(req, res) => {
  await res.send("server getting requests");
};

//updating equb user
const updateEqub = async (req, res) => {
 await res.send("updating files");
};

//deleting file

const deleteEqub = async (req, res) => {
 await  res.send("deleting files");
};

module.exports = { getEqub, createEqub, updateEqub, deleteEqub };