var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get('/burger', function(req,res) {

	burger.selectAll(function(data){
		var hbsObject = {
            burgers : data
        };
		// console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burger/update/:id', function(req,res) {
	burger.insertOne(['name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;
	console.log(res);
	console.log(`condition is ${condition}`);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burger');
		console.log(res);
	});
});

module.exports = router;
