var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 2000;

app.use(bodyParser.urlenconded({extended: false}));
app.use(bodyParser.json());

require("./api/routing/apiRoutes")(app);
require("./api/routing/htmlRoutes")(app)


app.listen(PORT, function(){
	console.log("App listening on PORT", PORT);
})