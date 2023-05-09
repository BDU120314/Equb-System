const express=require('express');
const {getEqub, createEqub, updateEqub, deleteEqub} =require('../controller/equbController')
const router=express.Router();


// get files

router.get("/", getEqub);

//creating files
router.post("/", createEqub);

//updating request

router.patch("/update/:id", updateEqub);

//delete requests

router.delete("/delete/:id", deleteEqub);


module.exports=router;