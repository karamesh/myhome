var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var message = fs.readFileSync("index.html").toString()
	response.send(message);
	
    });

app.use("/cssfiles", express.static(Scripts + '/cssfiles'))
app.use("/jsfiles", express.static(Scripts + '/jsfiles'))

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
    });