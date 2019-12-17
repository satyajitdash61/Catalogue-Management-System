const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({


    name:{
       type: String,
       required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    parent:{
        type:String,
        required:true
    },
    breadcrumb:{
        type:String,
        required:true
    },
    specifications:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('productdetails',userSchema);