const display = document.getElementById("scoreDisplay");
const newHighScore = document.getElementById("newHighScore");
const newTopScore = document.getElementById("newTopScore");

const score = window.sessionStorage.getItem("score");
const playerS = window.sessionStorage.getItem("player");
let player = JSON.parse(playerS);
const leaderboardS = window.sessionStorage.getItem("leaderboard");
let leaderboard = JSON.parse(leaderboardS);

display.innerText = "Final Score: " + score;


if(score > player.highScore){
    player.highScore = parseInt(score);
    window.sessionStorage.setItem("player", JSON.stringify(player));
    newHighScore.innerText = "New High Score!";
}

//check leaderboard scores
let x = parseInt(score);
let y = player.username;
let tempScore = 0;
let tempUsername = "";
let leaderboardUpdated = false;
for(let i = 0; i < leaderboard.topScores.length; i++){
    if(x > leaderboard.topScores[i]){
        tempScore = leaderboard.topScores[i];
        tempUsername = leaderboard.topPlayers[i];

        leaderboard.topScores[i] = x;
        leaderboard.topPlayers[i] = y;

        x = tempScore;
        y = tempUsername;
        leaderboardUpdated = true;
    }
}
if(leaderboardUpdated){
    window.sessionStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    newTopScore.innerText = "New Top Score!  Congratulations!";
}