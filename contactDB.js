var mysql = require('mysql');

function createConnection() {
var con = mysql.createConnection({
  host: "localhost",
  user: "appuser",
  password: "appuser",
  database: "contact"
});
return con;
}

function establishConnection(con){
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
return con;
}

module.exports.addcontact = function (contact){
  var SEPARATOR = "','";
  var statement = "INSERT INTO contact (name, email_id, telephone_no,comments, visited_india, interest, age) VALUES ('"
   + contact.name + SEPARATOR
   + contact.email + SEPARATOR
   + contact.phone + SEPARATOR
   + contact.preference + SEPARATOR
   + contact.visited_india + SEPARATOR
   + contact.interests + "',"
   + contact.age
   + ")";
    var connection = createConnection();
    connection = establishConnection(connection);
    connection.query(statement, function (err, result) {
      if (err) throw err;
    });
};

function getContact(){
var statement= "select * from contact where name like 'A%'";
con.query(statement, function (err, result) {
      if (err) throw err;
      console.log(result);
    });

}


