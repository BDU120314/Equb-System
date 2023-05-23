const asyncHandler = require("express-async-handler");

const equbUserModel = require("../model/equbUserModels");


//get all user
const getEqubUsers = asyncHandler(async (req, res) => {
  //Fetching all products from the database and assigning it to products
  const users = await equbUserModel.find();

  //Responding the data to any request made
  return res.status(200).json({
    success: true,
    data: users.reverse(),
  });
  //I use .reverse() function to get the latest datas at first
});

//get specific equb user

const getSingleUser = asyncHandler(async (req, res) => {
  //Destructing id from req.params
  const { id } = req.params;//focus here

  //Fetching single user using the id in the req.params from the database and assigning it to user
  const user = await equbUserModel.findOne({id });

  try {
    if (user) {
      //Responding the data to any request made
      return res.status(200).json({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
});


//create equb user

const createEqubUser = asyncHandler(async (req, res) => {
  //Destruct the data sent from req.body
   const {
     ID,
     fname,
     lname,
     phone_number,
     address,
     password,
     bank_account_no,
     email,
   } = req.body;

  //we use uuidv4 to generate a random and unique id for the products
  // const productId = uuidv4();

  try {
    //creating the product
    const user = await new equbUserModel({
      ID,
      fname,
      lname,
      phone_number,
      address,
      password,
      bank_account_no,
      email,
    });
    //save the product
    user.save();

    return res.status(201).json({
      success: true,
      message: "user created sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
});



//update equb user

const updateEqubUser = asyncHandler(async (req, res) => {
  //Destruct the data sent from req.body
  const { ID,fname, lname, phone_number,address,password,bank_account_no,email} = req.body;

  //Destructing the id from req.params
  const { id } = req.params;

  //assigning the specfic product to variable called product
  let user = await equbUserModel.findOne({ id });

  try {
    if (user) {
      //updating the datas of that product
      user.updateOne(
        {
          $set: {
            ID,
            fname,
            lname,
            phone_number,
            address,
            password,
            bank_account_no,
            email,
          },
        },
        {},
        { new: true }
      );

      return res.status(201).json({
        success: true,
        message: "user updated sucessfully",
        data: user,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
});


//Delete a single product
const deleteEqubUser = asyncHandler(async (req, res) => {
    //Destructing id from req.params
    const { id } = req.params

    try {

    //Fetching single product using the id in the req.params from the database and assigning it to product

    //Since there is no data to be responde we simple send a message
    return res.status(410).json({
        success: true,
        message: "user deleted sucessfully",
    })

    } catch (error) {
            return res.status(412).send({
                success: false,
                message: error.message
            })
        }
    
})







module.exports = {
  getEqubUsers,
  getSingleUser,
  createEqubUser,
  updateEqubUser,
  deleteEqubUser,
};

