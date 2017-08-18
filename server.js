const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

const app = express();

var orm = require("./config/orm.js");

app.use(express.static("public"));

app.get('/', function (req, res){
    res.send('Hey, you, world');
});

app.listen(port);

