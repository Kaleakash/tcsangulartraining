var mongoose = require("mongoose");     //load the module 
var uri ="mongodb://localhost:27017/mydb";  //URI 
mongoose.connect(uri,{useNewUrlParser:true});   // reference ready to connect
var db = mongoose.connection;               //connected to database. 
mongoose.Promise = global.Promise;
db.on("error",(err)=>console.log("Error Generated...."+err))

db.once("open",function() {
        console.log("Connected.....");
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
               // console.log(result);
               result.forEach(rec=>{
                   console.log("id is "+rec._id);
               })
            }
            db.close();         
        })
    
});