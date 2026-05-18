const leaderboardS = window.sessionStorage.get("leaderboard");
let leaderboard = JSON.parse("leaderboardS");

for (let i = 0; i < leaderboard.topScores.length; i++) {
    let rank = document.getElementById("rank" + i);
    let score = document.getElementById("score" + i);

    rank.innerText = leaderboard.topPlayers[i];
    score.innerText = leaderboard.topPlayers[i];
}