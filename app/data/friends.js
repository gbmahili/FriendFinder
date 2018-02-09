// array of objects
const friends = [
    {   
        routeName: "John",
        name:"John",
        photourl:"https://source.unsplash.com/random",
        questions:[
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
    },
    {   
        routeName: "Jane",
        name:"Jane",
        photourl:"https://source.unsplash.com/random",
        questions:[
                    2,
                    3,
                    4,
                    2,
                    5,
                    5,
                    4,
                    3,
                    4,
                    1
        ]
    },
    {
        routeName: "Christine",
        name: "Christine",
        photourl: "https://source.unsplash.com/random",
        questions: [
            1,
            3,
            4,
            2,
            2,
            1,
            4,
            2,
            4,
            5
        ]
    }  
     
];

var getMatch = require("./math.js");


var addingPerson = function(app){
    //retreiving stored objects with person's data
    app.post("/survey", function(req, res){
        var incomingPerson = req.body;
        incomingPerson.routeName = incomingPerson.name.replace(/\s+/g, "").toLowerCase();
        var incomingPersonQuestions = incomingPerson['questions[]'];
        incomingPerson.questions = incomingPersonQuestions;
        delete incomingPerson['questions[]'];
        friends.push(incomingPerson);
        var questionsInArray = [];
        friends.forEach(element => {
            questionsInArray.push(element.questions);
        });        
        // Remove the last element...which is the user that has just been inserted
        questionsInArray.pop();
        
        // Array containing all the results from the math:
        var finalResultsArray = getMatch.findAMatch(incomingPerson.questions, questionsInArray);
        // Find out the smallest numbers, then get their indexes
        var possibleMatches = getMatch.getIndexOfSmallestInArray(finalResultsArray);
        // Display the names and photos of those indexes back to the user using a get
        console.log(finalResultsArray);
        console.log(possibleMatches);
        res.send(friends[possibleMatches[0]]);
        
    });
};
// exporting friends and function addingPerson to use it in server.js
module.exports.friends = friends;
module.exports.addingPerson = addingPerson;