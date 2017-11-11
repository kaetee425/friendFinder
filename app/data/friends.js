var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 2000;

var profile = {
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	      5,
	      1,
	      4,
	      4,
	      5,
	      1,
	      2,
	      5,
	      4,
	      1
	    ]
	}
}

app.listen(PORT, function(){
	console.log("App listening on PORT", PORT);
})

module.exports = profile;