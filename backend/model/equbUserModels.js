
const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const userSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    bank_account_no: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    payments: [
      {
        time: {
          type: Date,
          default: Date.now,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
    payouts: [
      {
        time: {
          type: Date,
          default: Date.now,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports=mongoose.model('equbUser',userSchema);






// fname
// lname
// phone_number
// address
// password
// bank_account_no
// email
// ID
// time of payment and amount
// time of payout and amount










// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;