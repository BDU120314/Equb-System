const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const LogInUser = require("../model/logIn");

const loginController = async (req, res) => {
  const { phone_number, password } = req.body;

  try {
    // Find the user based on the phone number
    const user = await LogInUser.findOne({ phone_number });
    console.log(user);

    // Check if the user exists and if the password is correct
    if (!user || !bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: "Invalid phone credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
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

module.exports = { loginController, logoutController };
