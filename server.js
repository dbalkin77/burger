const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


const app = express();

app.listen(8000);

app.get('/', function (req, res){
    res.send('hello world');
});