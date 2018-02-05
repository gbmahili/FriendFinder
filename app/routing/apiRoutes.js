// App Dependencies
var express, bodyParser, path;
express = require("express");
bodyParser = require("body-parser");
path = require("path");
// Initiate app
var app, PORT;
app = express();
PORT = 3000;
var possibleFriends = {
    name : "Baraka",
    photo : "url link",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]    
}
//var publicFolder = "/../public/";
// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home route
app.get("/api/friends", (req, res) => {
    // Send json of possble friends
    res.json(possibleFriends);
});

// Survey Page
app.post("/api/friends", (req, res) => {
    // Receive surveys
});

// Start server
app.listen(PORT, () => { console.log(`Listening to: ${PORT}`) });