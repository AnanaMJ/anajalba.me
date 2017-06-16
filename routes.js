var express = require("express");
var util = require("util");
var router = express.Router();

router.get("/", function (req, res) {
	res.render("index");
});

router.get("/info", function (req, res) {
	res.render("info");
});

module.exports = router;