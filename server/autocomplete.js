'use strict';

const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

//establishing connection to the database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DB");
});

//setting up the server endpoint
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//handling post requests
app.post('/', function (req, res) {
  console.log("Received a POST request");
  const q = req.body.q;
  const query = `
  			  SELECT cities.*, countries.name AS country_name 
			  FROM cities 
			  INNER JOIN countries ON cities.country_id = countries.id
			  WHERE cities.name LIKE ? 
			  LIMIT 20`
  const parameter = q + "%";
  connection.query(query, [parameter], (err, rows) => {
	if (err) throw err;
	let output = [];
	for (let i=0; i<rows.length; i++) {
		let row = rows[i]
		let entry = {
			name: row.name,
			coordinate: [row.latitude, row.longitude],
			country: row.country_name
		}
		output.push(entry);
	}
    res.send(JSON.stringify(output));
    console.log("Response sent");
  });
});

app.listen(3000, function (err) {
  if (err) throw err;
  console.log("Server listening");
});