const fs = require('fs');
const questions = [];
const quizQuestions = [];
let score = 0;
let qNumber = 0;
const form = document.getElementById("quiz");

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
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * questions.length);
        quizQuestions.push(questions[x]);
    }
}

function getQuestion() {
    let qTitle = document.getElementById("question");
    qTitle.innerText = "Question #" + (questions[qNumber] + 1);
    let a = document.getElementById("answer1Label");
    a.innerText = questions[qNumber]["A"];
    let b = document.getElementById("answer2Label");
    a.innerText = questions[qNumber]["B"];
    let c = document.getElementById("answer3Label");
    a.innerText = questions[qNumber]["C"];
    let d = document.getElementById("answer4Label");
    a.innerText = questions[qNumber]["D"];
}

function checkAnswer() {
    let answer = form.elements["answer"].value;
    if (answer === quizQuestions[qNumber].answer) {
        score++;
    }
    qNumber++;
    if(qNumber >= 10) {
        endGame();
    } else {
        getQuestion();
    }
}

function endGame() {

}