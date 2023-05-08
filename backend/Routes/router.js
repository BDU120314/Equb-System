const express=require('express');
const {getEqub, createEqub, updateEqub, deleteEqub} =require('../controller/equbController')
const router=express.Router();


// get files

router.get("/", getEqub);

//creating files
router.post("/", createEqub);

//updating request

router.patch("/:id", updateEqub);

//delete requests

router.delete("/:id", deleteEqub);


module.exports=router;