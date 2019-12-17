const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product =require("./Model/productmodel");


router.post('/productinfo',(req,res,next) => {
    // console.log("here");
    const {name,brand,category,parent,breadcrumb,specifications} = req.body;
    // console.log(specifications);
    const product = new Product({
        name:req.body.name,
        brand:req.body.brand,
        category:req.body.category,
        parent:req.body.parent,
        breadcrumb:req.body.breadcrumb,
        specifications:req.body.specifications,

    });
    
    console.log(product);
    product.save()
    .then(product=>{
        res.status("200").send("Success");
    })
    .catch(err=>console.log(err)
    )
    
})


module.exports=router;