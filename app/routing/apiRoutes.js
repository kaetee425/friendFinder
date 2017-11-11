var profile = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/survey", function(req, res){
		res.join(profile);
	});

	app.post("api/survey", function(req, res){
		if (profile.scores.length == 10){
			profile.push(req.body);
			res.json(true);
		} else {
			res.json(false);
		}
	});

	app.post("/api/clear", function(){
		profile = [];

		console.log(profile);
	})
};