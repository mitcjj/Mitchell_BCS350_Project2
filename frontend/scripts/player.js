class Player {
    username;
    password;
    highScore;

    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.highScore = 0;
    }

    updateHighScore(highScore) {
        this.highScore = highScore;
    }
}