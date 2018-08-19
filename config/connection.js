// Connection to MySQL Database.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "105200Votw",
  database: "burgers_db"
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
