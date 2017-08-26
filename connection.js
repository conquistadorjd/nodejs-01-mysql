var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'mobilesdb'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to MySQL");

});

module.exports = connection;