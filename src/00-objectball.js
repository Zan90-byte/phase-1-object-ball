function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 1
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamdunks: 7
                },

                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15
                },

                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    Steals: 3,
                    blocks: 8,
                    slamdunks: 5
                },

                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamdunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamdunks: 2
                },

                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks: 10
                },

                "DeSagna Diop": {
                    number: 2,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks: 10
                },

                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamdunks: 0
                },

                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamdunks: 12
                }
            }
        }
    };
}


//console.log(gameObject());

//************************************************************* */



function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
//   console.log(homeTeamName());

  // ************************************************************/


function numPointsScored(playerName) {
    let game = gameObject();

    for (let teamName in game) {
        let team = game[teamName];

        //If player is found in one of the teams, search for player point and return it.

        if  (team.players[playerName]) {
            let playerPoints = team.players[playerName].points;
            return playerPoints;
        }
    }
    //If no player is found
    return "No player found"
}

// console.log(numPointsScored("Ben Gordon")); //33
// console.log(numPointsScored("John")); //No player found


//********************************************************* */


function shoeSize(playerName) {
    let game = gameObject();

    for (let teamName in game) {
        let team = game[teamName];

        if (team.players[playerName]) {
            let playerShoeSize = team.players[playerName].shoe;
            return playerShoeSize;
        }
    }
    //If no player is found
    return "No player found"
}

// console.log(shoeSize("Ben Gordon"));
// console.log(shoeSize("Mason Plumlee"));

//************************************************************* */


function teamColors(teamName) {
    let game = gameObject();

    for (let teamKey in game) {
        let team = game[teamKey];

        if (team.teamName === teamName) {
            let teamColors = team.colors;
            return teamColors;
        }
    }
    return "No team was found"
}

// console.log(teamColors("Brooklyn Nets"));

//************************************************************* */


function teamNames() {
    let game = gameObject();

    let teams = [game["home"]["teamName"], game["away"]["teamName"]];
    return teams;
}

// console.log(teamNames());

//************************************************************* */

function  playersNumbers(teamName) {
    let game = gameObject();

    for (let teamKey in game){
        let team = game[teamKey];

        if (team.teamName === teamName) {
            let playerNumbers = [];

            for (let playerName in team.players) {
                playerNumbers.push(team.players[playerName].number);
            }
            return playerNumbers;
        }    
    }
    return "No jerseys located for the team"
}

// console.log(playersNumbers("Brooklyn Nets")); 
// console.log(playersNumbers("Charlotte Hornets"));


// ******************************************************************* /



function playerStats (playersName) {
    let game = gameObject();
    
    for (let teamKey in game) {
        const team = game[teamKey];
        
        for (let playerName in team.players) {
            const player = team.players[playerName];
            
            if (playerName === playersName) {
            //let playerStats = player.players;
                return player;
            }
        }
    }
    return `Player ${playersName} not found`;
}

// console.log(playerStats("Ben Gordon"));
// console.log(playerStats("Alan Anderson"));
// console.log(playerStats("Paul"));

//****************************************************************** */



function bigShoeRebounds (){
    let game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = 0;

    for (let teamName in game) {
        let team = game[teamName];

        for (let playerName in team.players){
            let player = team.players[playerName];
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoeSize = player;
            }
        }
    }
    return playerWithLargestShoeSize.rebounds;
}

//console.log(bigShoeRebounds());
