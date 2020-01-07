var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'websubjects',
	dateStrings: "date"
});

connection.connect(function(err){
	if (err) {
		return;
	}
});

module.exports = connection;