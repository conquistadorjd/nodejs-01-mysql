var express = require('express');
var router = express.Router();
var connection = require('../connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  	var json = "";
  	var sql = "SELECT * FROM mobiledetails";
	
	connection.query(sql, function (err, result) {
	  	if (err) throw err;
	  	
	  	console.log(result);
	  	json = JSON.stringify(result);
	  	console.log(json);
	  	res.send('api request'+ json);
  		});
});

/* GET users listing. */
//  input query is http://localhost:3000/api/getbyname?mobilename=arinjay
router.get('/getbyname', function(req, res, next) {
    
    var data = {
        mobilename: req.query.mobilename
    };	
  	var json = "";
  	var sql = "SELECT * FROM mobiledetails where name = ?";
  	console.log(data.mobilename);
	
	connection.query(sql, [data.mobilename], function (err, result) {
	  	// if (err) throw err;
	  	if (err)
	  		res.send('error ' + err);
	  	console.log(result);
	  	json = JSON.stringify(result);
	  	console.log(json);
	  	res.send('api request'+ json);
  		});
});

module.exports = router;
