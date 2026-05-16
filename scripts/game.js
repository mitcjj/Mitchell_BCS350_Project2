const questions = [];
let quizQuestions = [];
let score = 0;
let qNumber = 0;
const form = document.getElementById("quiz");

fetch('/Mitchell_BCS350_Project2/backend/questions.json')
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
    let shuffled = [...questions].sort(() => Math.random() - 0.5);

    for (let i = 0; i < 10; i++) {
        quizQuestions.push(shuffled[i]);
    }
}

function getQuestion() {
    let currentQuestion = quizQuestions[qNumber];

    document.getElementById("title").innerText =
        "Question #" + (qNumber + 1);

    document.getElementById("question").innerText =
        currentQuestion.question;

    document.getElementById("answer1Label").innerText =
        currentQuestion.A;

    document.getElementById("answer2Label").innerText =
        currentQuestion.B;

    document.getElementById("answer3Label").innerText =
        currentQuestion.C;

    document.getElementById("answer4Label").innerText =
        currentQuestion.D;

    document.querySelectorAll('input[name="answer"]')
        .forEach(r => r.checked = false);
}

function checkAnswer() {
    let currentQuestion = quizQuestions[qNumber];

    if (!currentQuestion) {
        console.log("No question found");
        return;
    }

    let answer = form.elements["answer"].value;
    if (answer === currentQuestion.answer) {
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