var express = require("express");
var util = require("util");
var router = express.Router();

router.get("/", function (req, res) {
	res.render("index");
});

router.get("/about", function (req, res) {
	res.render("about", {
		"activePage": "about"
	});
});

router.get("/art-wall", function (req, res) {
	res.render("art-wall", {
		"activePage": "art-wall"
	});
});

router.get("/contact", function (req, res) {
	res.render("contact", {
		"activePage": "contact"
	});
});

module.exports = router;