var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'address_book'
});
var app = express();

app.use(express.static('static'));

app.use(bodyParser.json());

db.query('CREATE TABLE IF NOT EXISTS addresses (id int(11) NOT NULL AUTO_INCREMENT, firstName varchar(50) NOT NULL, lastName varchar(50) NOT NULL, streetAddress varchar(100) NOT NULL, city varchar(50) NOT NULL, state varchar(2) NOT NULL, zip varchar(10) NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=utf8;');

app.get('/api/addresses/', function(request, response) {
    db.query('SELECT * FROM addresses', function(error, rows, fields) {
        if (!error) {
            response.json(rows);
        } else {
            console.log("MySql query error: " + error);
        }
    });
});

app.post('/api/addresses', function(request, response) {
    var address = request.body;
    if (address.firstName === '' || address.lastName === '' || address.streetAddress === '' || address.city === '' || address.state === '' || address.zip === '') {
      response.status(500).send({ message: 'Error: fields cannot be null or empty.'});
      return;
    }
    db.query('INSERT INTO addresses (firstName, lastName, streetAddress, city, state, zip) VALUES (?, ?, ?, ?, ?,?)', [address.firstName, address.lastName, address.streetAddress, address.city, address.state, address.zip], function(error, result) {
        if (!error) {
            response.send({ message: 'Success' });
        } else {
            response.status(500).send({ message: error});
            console.log("MySql query error: " + error);
        }
    });
});

app.listen(3000);

console.log("Server is running on port 3000");
