class Game {
    user;
    score;
    questions;
    timer;
    leaderboard;

    constructor(user) {
        this.user = user;
        this.score = 0;
        this.questions = [];
        this.timer = setTimeout(() => {})
        this.leaderboard = [10];
    }

    loadQuestions() {}

    askQuestion() {

    }

    endGame(){
        if(this.score > this.user.highScore) {
            this.user.updateHighScore(this.score);
        }
        for(let i = 0; i < this.leaderboard.length; i++) {
            if(this.score > this.leaderboard[i].score) {
                this.leaderboard.splice(i, 0, new leaderboardEntry(this.user.username, this.score));
            }
            break;
        }
    }

    loadLeaderboard() {}

    updateLeaderboard(leaderboard) {}
}