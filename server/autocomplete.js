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

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB");
});

global.db = connection;

//setting up the server endpoint
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//eslint-disable-next-line no-undef
require('./routes/routes.js')(app, db);

app.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server listening");
});