const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 3000;


const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res){
//     res.send('Something NEW');
// });

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
