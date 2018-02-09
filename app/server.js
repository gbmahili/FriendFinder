//Incorporate dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//call express
var app = express();
//requiring htmlRoute.js
require('../app/routing/htmlRoutes.js')(app, path);
//requiring apiRoutes.js
require('../app/routing/apiRoutes.js')(app);

// Declare a port
var PORT = 3000;

//data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//requiring the friends.js
const friends = require('../app/data/friends.js');
friends.addingPerson(app);
// friends.findAMatch(incomingPersonQuestions);
// console.log(friends.friends);

//Listen to port
app.listen(PORT, ()=>{
    console.log('listening to PORT: '+ PORT);
});
