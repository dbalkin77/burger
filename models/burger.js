// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
      selectAll: function(tableInput) {
            var queryString = 'SELECT * FROM ??';
            connection.query(queryString, [tableInput], function (err, result) {
                console.log(result);
            });
        },
