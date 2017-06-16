var express = require("express");

var app = express();

app.get("/", function(req, res) {
	console.log("Request made");
	res.send("Hello world!");
});

app.listen(3000, function() {
	console.log("app is listening on port 3000");
});
