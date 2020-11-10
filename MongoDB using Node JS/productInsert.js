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
        var Product = mongoose.model("Product",productSchema);
        //create product document instance or reference 
        var p1 = new Product({_id:102,pname:"PC",price:50000});
        //Ready to save to record in MongoDB
        p1.save((err,result)=> {
                if(err){
                    console.log("Error Generated")
                }else {
                    console.log("Record inserted successfully...")
                }
                db.close();
        })
});