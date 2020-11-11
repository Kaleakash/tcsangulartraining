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

        //Update Product price using Id 
        Product.updateOne({_id:101},{$set:{price:58000}},(err,result)=> {
            if(err){
                console.log("Error generated "+err);
            }else {
                //console.log("Updated successfully "+result.nModified);
                    if(result.nModified==0){
                         console.log("Record didn't update")   
                    }else {
                        console.log("Record update")  
                    }
            }
            db.close();
        })
        
});