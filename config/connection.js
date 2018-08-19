// Connection to MySQL Database.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "be4e80284f3803",
  password: "8408b2bc",
  database: "heroku_c44d8a3c82b908b"
});

// Making the connection and confirming it,
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting connection for the ORM to use.
module.exports = connection;
