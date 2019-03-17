// incoming surveys results and compatibility info

let friendList = require('../data/friend');

module.exports = (app) => {
    app.get('/api/friends', function(req, res){
        res.json(friendList)

    });

    app.post('/api/friends',  function(req, res){
        //pull new friend scores for comparison
        let newFriendScores = req.body.scores;
        let scoreArray = [];
        let friendCount = 0;
        let bestMatch = 0;
    })
//  passes through present friends in listing
        for(var i = 0; i < friendList.length; i++){
            let scoreDifferent = 0;

            // pass through scores to compare friends
        for(var j = 0; j < newFriendScore.length; j++){
            scoreDifferent += (Math.abs(parseInt(friendList[i].score[j]) - parseInt(newFriendScore[h])));

// push score results into scoreArray
            scoreArray.push(scoreDifferent);
        }

        for(var i = 0; i < scoreArray.length; i++) {
            if(scoreArray[i] <= scoreArray[bestMatch]){
                bestMatch = i;

            }
        }
        let foundMatch = friendList[bestMatch];
        res.json(foundMatch);

//  push new information into friendList array  
        friendList.push(req.body);
    };

};

