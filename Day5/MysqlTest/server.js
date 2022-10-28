const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qweasd123',
  database : 'userdb'
});

connection.connect();

connection.query('SELECT * from userinfo', function (error, results, fields) {
  if (error) { 
		console.log('Error: ' + error);
	} else {
		console.log(results);
	}
});
 
connection.end();