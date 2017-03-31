var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cw#rvtd:3',
    database: 'address_book'
});
var app = express();

app.use(express.static('static'));

app.use(bodyParser.json());

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
    db.query('INSERT INTO addresses (firstName, lastName, streetAddress, city, state, zip) VALUES (?, ?, ?, ?, ?,?)', [address.firstName, address.lastName, address.streetAddress, address.city, address.state, address.zip], function(error, result) {
        if (!error) {
            response.send({ message: 'Success' });
        } else {
            response.send({ message: 'Error' })
            console.log("MySql query error: " + error);
        }
    });
});

app.listen(3000);

console.log("Server is running on port 3000");
