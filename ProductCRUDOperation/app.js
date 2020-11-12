//Load All Modules 
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var port = 9090;

//Database URL Details 
var url = "mongodb://localhost:27017/mydb";

//creating reference of express 
var app = express();

//Middlware mdoules setup 
app.use(bodyParser.json()); //converting json req data. post method  
app.use(bodyParser.urlencoded({extended:true}));   //Enable post, put and delete body data 
app.use(cors());            //Enable CORS Features 

//Database Connection with avoid warning properties 
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});

//Connect to database 
mongoose.connection;

//Coding .....
var Product = require("./router/product.router.js");

//Middleware 
app.use("/product",Product);        //http://localhost:9090/product

//app.use("/customer",Customer);

app.listen(port,()=>console.log(`Server is running on ${port} number`));


