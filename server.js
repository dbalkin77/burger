const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.get('/', function (req, res){
    res.send('Hey, you, world');
});

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(port);

