// App Dependencies
var express, bodyParser, path;
express = require("express");
bodyParser = require("body-parser");
path = require("path");
// Initiate app
var app, PORT;
app = express();
PORT = 3000;

var publicFolder = "/../public/";
// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(`${__dirname}${publicFolder}`, "home.html"));
});

// Survey Page
app.get("/survey", (req, res) => {
    res.sendFile(path.join(`${__dirname}${publicFolder}`, "survey.html"));
});

// Start server
app.listen(PORT, ()=>{console.log(`Listening to: ${PORT}`)});