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

    //   payments: [
    //     {
    //       time: {
    //         type: Date,
    //         default: Date.now,
    //       },
    //       amount: {
    //         type: Number,
    //
    //       },
    //     },
    //   ],
    //   payouts: [
    //     {
    //       time: {
    //         type: Date,
    //         default: Date.now,
    //       },
    //       amount: {
    //         type: Number,
    //
    //       },
    //     },
    //   ],
  })
const User = mongoose.model("User", userSchema);

module.exports = User;

