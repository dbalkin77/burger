// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput) {
            var queryString = 'SELECT * FROM ??';
            connection.query(queryString, [tableInput], function (err, result) {
                conosle.log(result);
            });
        },
        insertOne: function (table, burger_name, burger) {
            var queryString = 'INSERT INTO ?? (??) VALUES (?)';
            connection.query(queryString, [table, burger_name, burger], function (err, result){
                console.log(result);
            });
    },
        updateOne: function (table_name, burger_type, new_burger, colToSearch, id) {
            var queryString = "UPDATE ?? SET ?? = '?' WHERE ?? = '?'";
            connection.query(queryString, [table_name, burger_type, new_burger, colToSearch, id], function (err, result){
                conosle.log (result);
            });
    }
};

module.exports = orm;


