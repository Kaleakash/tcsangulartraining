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

        //Delete Query 
        Product.deleteOne({price:58000},(err,result)=>{
            if(err) throw err;
            //console.log(result);
                    if(result.deletedCount>0){
                        console.log("Record deleted successfully...")
                    }else {
                        console.log("Record is not present");
                    }
            db.close();
        })
        
});