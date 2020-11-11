
var ProductModel = require("../model/product.model.js");

//Retrieve Product Details From Db 

var GetProductFromDb = (req,res)=>{
    ProductModel.find({},(err,data)=>{
        if(err) throw err;
            
            res.json(data);
    
        })
}

module.exports = {GetProductFromDb}