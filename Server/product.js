const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Product =require("./Model/productmodel");


router.post('/productinfo',async (req,res,next) => {
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
   let result = await product.save()
   console.log(result)
})

router.get('/buy',(req,res) => {
    Product.find({})
    .then((data)=>{if(!data)
    return res.status(404).json({"error":"no data found"});
    console.log(data);
    res.status(200).json(data)
    });
})


module.exports=router;