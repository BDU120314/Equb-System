const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')

const User = require('../model/equbUserModels');

// Create User
const createUser = async (req, res) => {
  const {
    fname,
    lname,
    phone_number,
    address,
    password,
    bank_account_no,
    email,
    imageUrl,
  } = req.body;

  console.log(req.body);

  try {
    // Check if the user with the same phone number or email already exists
    const existingUser = await User.findOne({
      $or: [{ phone_number }, { email }],
    });
    if (existingUser) {
      return res.status(400).json({
        error: "User with this phone number or email already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      fname,
      lname,
      phone_number,
      address,
      password: hashedPassword,
      bank_account_no,
      email,
      imageUrl,
    });
    console.log(newUser);

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while signing up" });
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


const loginController = async function (req, res) {
  const { phone_number, password } = req.body;

  try {
    // Find the user based on the phone number
    const user = await User.findOne({ phone_number });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: "Invalid phone credentials" });
    }

    // Compare the password with the hashed password
    const isPasswordValid = await comparePasswords(password, user.password);

    // Check if the password is correct
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id, phone_number }, "equb", {
      expiresIn: "1m",
    });

    // Send the token in the response
    res.status(200).json({user_id: user._id, token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

const comparePasswords = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw error;
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