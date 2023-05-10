const express=require('express');
const {getEqub, createEqub, updateEqub, deleteEqub} =require('../controller/equbController')
const userRouter=express.Router();


// get files

userRouter.get("/", getEqub);

//creating files
userRouter.post("/", createEqub);

//updating request

userRouter.patch("/:id", updateEqub);

//delete requests

userRouter.delete("/:id", deleteEqub);


module.exports=userRouter;