var MongoClient = require("mongodb").MongoClient;
//Load the mongodb module as well as created the reference of that module. 
var uri ="mongodb://localhost:27017/mydb";
//mongodb://serverip:port/databasename

MongoClient.connect(uri,(err,db)=> {
    if(err) {
        console.log("Error Generated...")
    }else {
        console.log("Database connected successfully...")
    }

    db.close();     //close the connection...
});

