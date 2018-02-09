// array of objects
const friends = [
    {   
        routeName: "ahmed",
        name:"ahmed",
        photourl:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
        routeName: "veena",
        name:"veena",
        photourl:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
    }   
     
];

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
        
        console.log(incomingPerson.questions);
        console.log(questionsInArray);
       
        
    });
};
// exporting friends and function addingPerson to use it in server.js
module.exports.friends = friends;
module.exports.addingPerson = addingPerson;