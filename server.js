var http = require("http");
var server = http.createServer(function(req,res){
	res.write("Welcome to Node JS Server ");
	res.end();
});
server.listen(9090);
console.log("Server waiting on port number 9090");
