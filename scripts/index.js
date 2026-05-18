let leaderboard = window.sessionStorage.get("leaderboard");
if (!leaderboard) {
    leaderboard = scoreBoard();
    window.sessionStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}