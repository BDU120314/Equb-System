const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
    },
    bank_account_no: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    ID: {
      type: Array,
      unique: true,
    },
  },
  { timestamps: true }
);
const LogInUser = mongoose.model("LogInUser", userSchema);

module.exports = LogInUser;
