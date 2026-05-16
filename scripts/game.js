const questions = [];
const quizQuestions = [];
let score = 0;
let qNumber = 0;
const form = document.getElementById("quiz");

fetch('../backend/questions.json')
    .then(response => response.json())
    .then(data => {
        questions.push(...data);

        setQuestions();
        getQuestion();
    })
    .catch(error => {
        console.log("Error loading questions:", error);
    });

function setQuestions() {
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * questions.length);
        quizQuestions.push(questions[x]);
    }
}

function getQuestion() {
    let qTitle = document.getElementById("question");
    qTitle.innerText = "Question #" + (qNumber + 1);
    let a = document.getElementById("answer1Label");
    a.innerText = quizQuestions[qNumber]["A"];
    let b = document.getElementById("answer2Label");
    b.innerText = quizQuestions[qNumber]["B"];
    let c = document.getElementById("answer3Label");
    c.innerText = quizQuestions[qNumber]["C"];
    let d = document.getElementById("answer4Label");
    d.innerText = quizQuestions[qNumber]["D"];
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