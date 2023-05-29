

//creating users
const createEqubUser = async (req, res) => {
  try {
    const user = await userService.createEqubUser(req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Geting equb user

const getEqubUser = async (req, res) => {
  try {
    const user = await userService.getEqubUserById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//updating equb user
const updateEqubUser = async (req, res) => {
  try {
    const user = await userService.updateEqubUser(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//deleting file

const deleteEqubUser = async (req, res) => {
  try {
    const user = await userService.deleteEqubUser(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getEqubUser,
  createEqubUser,
  updateEqubUser,
  deleteEqubUser,
};

