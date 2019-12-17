const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User =require("./Model/productmodel");


router.post('/productinfo',(req,res,next) => {
    console.log("here");
    
})


module.exports=router;