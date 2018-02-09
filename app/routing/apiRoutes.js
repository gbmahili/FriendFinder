//PARAMETERIZATION
const friends = require('../../app/data/friends.js').friends
module.exports = function(app){
//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends/:whoDoIWantToSee?", function(req, res){
    var chosen = req.params.whoDoIWantToSee;
    if(chosen){
        var chosenMate = friends.filter(element => element.name == chosen);
        // console.log(x);
        if (chosenMate.length == 0 ){
            return res.end("<h1 style = 'color:red; margin:50px; border:5px solid black; padding:20px;'>Oops!!! The person you are looking for is not in our server.  Good Luck in finding your mate</h1>");
        }
        return res.json(chosenMate);  
        }
    res.json(friends);
});
//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
}
