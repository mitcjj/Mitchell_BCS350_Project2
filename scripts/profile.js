const playerS = window.sessionStorage.getItem("player");
const player = JSON.parse(playerS);

const playerName = document.getElementById("playerName");
playerName.innerText = player.name;

const playerScore = document.getElementById("playerScore");
playerScore.innerText = player.highScore.toString();