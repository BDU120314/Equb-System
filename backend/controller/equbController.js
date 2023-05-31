// const asyncHandler = require("express-async-handler");
// const equbUserModel = require("../model/equbUserModels");
// const fs = require("fs");

// //Geting equb user
// const getEqubUser = asyncHandler(async (req, res) => {
//   try {
//     const user = await equbUserModel.find();
//     return res.status(200).json({ data: user, status: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// //Getting single equb user
// const getEqubUserById = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const user = await equbUserModel.findOne({ id });
//   console.log(user);
//   try {
//     if (user) {
//       //Responding the data to any request made
//       return res.status(200).json({
//         success: true,
//         data: user,
//       });
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: "user not found",
//       });
//     }
//   } catch (error) {
//     return res.status(412).send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// //creating users
// const createEqubUser = asyncHandler(async (req, res) => {
//   //Destruct the data sent from req.body
//   const {
//     fname,
//     lname,
//     phone_number,
//     address,
//     password,
//     bank_account_no,
//     email,
//     ID,
//   } = req.body;

//   //const uploader = async (path) => await cloudinary.uploads(path, "Images");

//   try {
//     // if (req.method === "POST") {
//     //   const urls = [];
//     //   const files = req.body.ID;
//     //   console.log(files);
//     //   for (const file of files) {
//     //     const { path } = file;
//     //     const newPath = await uploader(path);
//     //     urls.push(newPath);
//     //     fs.unlinkSync(path);
//     //   }
//     //creating the user
//     const user = await new equbUserModel({
//       fname,
//       lname,
//       phone_number,
//       address,
//       password,
//       bank_account_no,
//       email,
//       ID,
//     });

//     user.save();

//     return res.status(201).json({
//       success: true,
//       message: "user created sucessfully",
//       data: user,
//     });
//     // } else {
//     //   return res.status(405).json({
//     //     err: `${req.method} method not allowed`,
//     //   });
//     // }
//   } catch (error) {
//     return res.status(412).send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// //updating equb user
// const updateEqubUser = asyncHandler(async (req, res) => {
//   //Destruct the data sent from req.body
//   const {
//     fname,
//     lname,
//     phone_number,
//     address,
//     password,
//     bank_account_no,
//     email,
//     ID,
//   } = req.body;

//   const uploader = async (path) => await cloudinary.uploads(path, "Images");

//   //Destructing the id from req.params
//   const { id } = req.params;

//   //assigning the specfic user to variable called user
//   let user = await equbUserModel.findOne({ _id: id });
//   try {
//     if (user) {
//       if (req.method === "PATCH") {
//         const urls = [];
//         const files = req.body;
//         console.log(files);
//         // for (const file of files) {
//         //   const { path } = file;
//         //   console.log(path);
//         //   const newPath = await uploader(path);
//         //   urls.push(newPath);
//         //   fs.unlinkSync(path);
//         // }
//         //updating the datas of that user
//         user.updateOne(
//           {
//             $set: {
//               fname,
//               lname,
//               phone_number,
//               address,
//               password,
//               bank_account_no,
//               email,
//               ID,
//             },
//           },

//           {},
//           { new: true }
//         );
//         return res.status(201).json({
//           success: true,
//           message: "user updated sucessfully",
//           data: user,
//         });
//       } else {
//         return res.status(405).json({
//           err: `${req.method} method not allowed`,
//         });
//       }
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: "user not found",
//       });
//     }
//   } catch (error) {
//     return res.status(412).send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// //deleting file
// const deleteEqubUser = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     await equbUserModel.deleteOne({ id });

//     return res.status(410).json({
//       success: true,
//       message: "user deleted sucessfully",
//     });
//   } catch (error) {
//     return res.status(412).send({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = {
//   getEqubUser,
//   getEqubUserById,
//   createEqubUser,
//   updateEqubUser,
//   deleteEqubUser,
// };


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

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};