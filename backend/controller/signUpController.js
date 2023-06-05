const bcrypt = require("bcryptjs");
const User = require("../model/equbUserModels");

const signUpController = async (req, res) => {
  const {
    fname,
    lname,
    phone_number,
    address,
    password,
    bank_account_no,
    email,
    ID,
  } = req.body;

  try {
    // Check if the user with the same phone number or email already exists
    const existingUser = await User.findOne({
      $or: [{ phone_number }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({
          error: "User with the same phone number or email already exists",
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
      ID,
    });
console.log(newUser);
    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while signing up" });
  }
};

module.exports = { signUpController };
