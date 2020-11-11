var express = require("express");
var app = express();    //created reference 
var port = 9090;
var mongoose = require("mongoose");     //load the module 
var uri ="mongodb://localhost:27017/mydb";  //URI 
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology: true});   // reference ready to connect
var db = mongoose.connection;               //connected to database. 
mongoose.Promise = global.Promise;
db.on("error",(err)=>console.log("Error Generated...."+err))

var productInfo=[{pid:"100",pname:"Tv",price:95000},
                {pid:"101",pname:"Computer",price:45000},
                {pid:"102",pname:"Bike",price:195000},
                {pid:"103",pname:"Laptop",price:85000}]

app.get("/products",(req,res)=> {
            res.json(productInfo);  //json method help to produce json data. Static 
})

app.get("/productsDb",(req,res)=> {

            //Define the Schema for Collection 
            var productSchema = mongoose.Schema({
                _id:Number,
                pname:String,
                price:Number
            });
            //Map this schema to model 
            var Product = mongoose.model("product",productSchema);
    
            //Retrieve the product records. 
            Product.find({},(err,result)=>{
    
                if(err){
                    console.log("Error "+err);
                }else {
                  res.json(result);
                }
                db.close();         
            })
})



app.listen(port,()=>console.log(`Server is running on port ${port}`));



