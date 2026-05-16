const fs = require('fs');
const questions = [];
const quizQuestions = [];
const score = 0;

fs.readFile('../backend/questions.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    try {
        const data = JSON.parse(jsonString);
        questions.push(data);
    } catch (err) {
        console.log('Error parsing JSON string:', err);
    }
});

function setQuestions() {
    for (let i = 0; i < 11; i++) {
        let x = Math.floor(Math.random() * questions.length);
        quizQuestions.push(questions[x]);
    }
}

function getQuestion() {

}

function checkAnswer() {
    let answer = document.getElementById("answer");
}

function endGame() {

}