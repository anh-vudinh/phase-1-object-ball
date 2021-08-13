let teamStats = {};
gameObject();
const passTeamStats = Object.assign({}, teamStats);

let allPlayersArray;
createAllPlayersArray(passTeamStats.home,passTeamStats.away);

function gameObject(){
    teamStats = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
    
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise, Purple'],
            players:{
                "Jeff Adrien":{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo":{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop":{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon":{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood":{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
    return teamStats;
}

function createAllPlayersArray(homeKey, awayKey){
    const homeObject = homeKey;
    const awayObject = awayKey;

    const homeArray = [homeObject];
    const awayArray = [awayObject];

    const homePlayersArray = homeArray.map(homePlayers => 
        homePlayers.players);
    const awayPlayersArray = awayArray.map(awayPlayers => 
        awayPlayers.players);

    allPlayersArray = [...homePlayersArray, ...awayPlayersArray]
    return allPlayersArray;
}

function numPointsScored (playerNameArg){

    allPlayersArray.find()

}













// (1)
//BREAKDOWN
// for (let {PROPERTY} in {ARRAY}){
//     let value = [{ARRAY}][{PROPERTY}];
//     console.log("key:", {PROPERTY}, "value", value);
// }
// (2)
// for (let key in passTeamStats){
//     let value = passTeamStats[key].colors;
//     console.log("key:", key, "value:", value);
// }
// (3)
// for (let key in passTeamStats){
//     let value = passTeamStats[key].players;
//     console.log("key:", key, "value:", value);
// }
// (4)
// for (let key in passTeamStats){
//     let value = passTeamStats[key].players;
//     console.log("value:", value);
// }
//(5)








//createArray();
//console.log(testArray);


    // for (let team in passTeamStats){
    //     let value = passTeamStats[team]
    //     //start off key again as playername
    //     testArray = Object.assign({}, value);
    //     //console.log(key,"value:", value);
    //     return testArray;
    // }







//const test = passTeamStats.home.players["Alan Anderson"];
//console.log(test);

// for (let key in passTeamStats){
//     let value = passTeamStats[key];
//     console.log("key:", key, "value:",value);
// }

// function numPointsScored(key, array){
//     for (key in array){
//         array.find(x => x = key);
//         return console.log(key);
//     }
// }





//console.log(newArray);
// function returnProperties(teamStats){
//     let property = Object.keys(teamStats);
//     debugger
//     console.log(property);
//     return property;
// }

// function homeTeamName(){
//     let object = gameObject();
//     return object['home']['teamName'];
// }

// console.log(gameObject());
// console.log(homeTeamName());

// function numPointsScored(playerName){
//     return teamStats;
// }