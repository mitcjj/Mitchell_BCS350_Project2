const display = document.getElementById("scoreDisplay");
const newHighScore = document.getElementById("newHighScore");
const newTopScore = document.getElementById("newTopScore");

const score = window.sessionStorage.getItem("score");
//const player = window.sessionStorage.getItem("player");
//const leaderboard = window.sessionStorage.getItem("leaderboard");

display.innerText = "Final Score: " + score;

/*
if(score > player.highScore){
    player.highScore = Integer.parseInt(score);
    newHighScore.innerText = "New High Score!";
}
*/
//check leaderboard scores