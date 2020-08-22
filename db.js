var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'study',
  password : '1111'
});

db.connect();

module.exports = db;