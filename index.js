var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "static")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", require("./routes"));

app.listen(3000, function() {
	console.log("app is listening on port 3000");
});
