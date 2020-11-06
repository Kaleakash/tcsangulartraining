let port = 9090;
let http = require("http");
http.createServer((req,res)=> {
               
        if(req.url=="/"){
               res.writeHead(200,{"content-type":"text/html"});
               res.write("Welcome to Http Server Home Page"); 
        }else if(req.url=="/aboutus"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write("Welcome to Http Server - About Us"); 
        }else if(req.url=="/contactus"){
            res.writeHead(200,{"content-type":"text/html"});
            res.write("<font color=red>Contact Us</font>");   
        }else {
            res.writeHead(404,{"content-type":"text/plain"});
            res.write("<font color=red>Error Page</font>"); 
        }
        res.end();


}).listen(port);
console.log(`The server is running on ${port}`);