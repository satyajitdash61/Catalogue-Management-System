const express =require('express');
const bodyparser=require('body-parser')
const mongoose = require('mongoose');
const uri = "mongodb+srv://Satyajit:1234@cluster0-xulor.mongodb.net/shopify";

const app = express();
const port = process.env.PORT || 8300;
const cors=require('cors');
app.use(bodyparser.urlencoded({encoded:false}))
app.use(bodyparser.json());
app.use(cors());

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
                    .then(() => console.log('Connected to MongoDB Successfully......'))
                    .catch(err => console.log('Error occured while connecting MongoDB '+err));


// app.use('/api',require('./rout'));
app.use('/product',require('./product'));

app.listen(port, () => {
console.log("Port 8300 running on browser...");
});

// app.post('/',(req,res)=>{
//     console.log(req.body.Username)
// })