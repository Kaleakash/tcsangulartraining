var port = 9090;
var express = require("express");
var app = express();    //creating the reference 
var bodyParser = require("body-parser");

//middleware 
app.use(bodyParser.json());     //Unable to post method body data.
app.use(express.urlencoded({extended:true}))    //

app.use((req,res,next)=> {
    console.log("Middleware Called.....")
    console.log(req.url);
    console.log(req.method);
    next();
})

console.log("Module loaded....")
app.get("/",(req,res)=> {
    res.send("Welcome to Express Module Get Method Generic Path ")
})
app.get("/a",(req,res)=> {
    res.send("Welcome to Express Module Get Method Specific for a")
})
app.get("/b",(req,res)=> {
    res.send("Welcome to Express Module Get Method Specific for b")
})
app.get("/c",(req,res)=> {
    res.send("Welcome to Express Module Get Method Specific for c")
})
//http://localhost:9090/user/Raj/Deep 
app.get("/user/:fname/:lname",(req,res)=> {
    console.log(req.params);
    let user = req.params.fname;
    //res.send("You Sent path param data ");
    res.send("Welcome "+user);
})
//http://localhost:9090/emp?id=100&name=Ravi&salary=14000
app.get("/emp",(req,res)=> {
        let id = req.query["id"];
        let name = req.query["name"];
        let salary = req.query["salary"];
        res.send(" Id is "+id+" Name is "+name+" Salary is "+(eval(salary)+4000));    
})

app.get("/login",(request,response) => {
    let username = request.query["username"];
    let password = request.query["password"];
    if (username == "Dat" && password == "123456") {
        response.send("Successful Login")
    } else {
        response.send("Failure")
    }
    
});

app.get("/loginPage",(req,res)=> {
    res.sendFile("Login Page Path");
})
/*
path : login 
        if condition username and password is correct success or failure 
        login.html  action ="http://localhost:9090/login" method ="get"
                    textField 
                    PasswordField 
                    Submit 
*/


app.post("/",(req,res)=> {
    console.log("Post Method Called....");
    res.send("Welcome to Post Method");
})

app.post("/login",(req,res)=>{
   
    //let username = req.query["username"];
    //let password = req.query["password"];

    let username = req.body.username;
    let password = req.body.password;
    console.log(username+" "+password);
    if (username == "Dat" && password == "123456") {
        res.send("Successful Login")
    } else {
        res.send("Failure")
    }

});

app.put("/",(req,res)=> {
    res.send("Put Method call.....")
})

app.put("/updateEmp",(req,res)=> {
        let salary = req.body.salary;
        let id = req.body.id;
        console.log("Id is "+id+" Salary is "+salary);
        salary = eval(salary)+5000;
        res.send("Salary"+salary);

        //eval() it is use to convert string to number. 
})

app.delete("/",(req,res)=> {
    res.send("Delete method call......")
})
app.delete("/deleteEmp/:id",(req,res)=> {
        let id = req.params.id;
        //Call DB Module 
        res.send("Your record deleted successfully with "+id);
});

app.listen(port,()=>console.log(`Server is running on ${port}`));





