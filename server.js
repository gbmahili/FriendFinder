// App Dependencies
var express, bodyParser, path;
express = require("express");
bodyParser = require("body-parser");
path = require("path");
// Initiate app
var app, PORT;
app = express();
PORT = 3000;
// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());