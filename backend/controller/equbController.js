const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')

const User = require('../model/equbUserModels');

// Create User
const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create User' });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Users' });
  }
};

// Get User by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch User' });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update User' });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete User' });
  }
};


const loginController = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    // Find the user based on the phone number
    const user = await User.findOne({ phone_number });
    console.log(user);

    // Check if the user exists and if the password is correct
    if (!user || !bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: "Invalid phone credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, "equb", {
      expiresIn: "1h",
    });

    // Send the token in the response
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

const logoutController = (req, res) => {
  // Clear user data from session
  req.session.user = null;
  res.status(200).json({ message: "Logout successful" });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginController,
  logoutController,
};