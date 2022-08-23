var questionIndex = 0;

var timerEl = document.getElementById("timer");
var questionHeader = document.getElementById("question-header");
var mainPage = document.getElementById("main-page");
var quizPage = document.getElementById("quiz-page");
var quizButtons = document.querySelector(".answers");
var question = document.querySelector(".question")
var choiceContainer = document.querySelector(".answers")

var quizList = [
    {
        question: "Javascript is an _______ language?",
        choices: ["object-oriented", "objective-base", "\n", "procedural", "\n", "none of the above"],
        answer: "object-oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "Both A and B", "none of the above"],
        answer: "var"
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "none of the above"],
        answer: "Both A and B"
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        choices: ["Throws an error", "Ignores the statements", "Gives a warning", "none of the above"],
        answer: "Ignores the statements"
    },
    {   question: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()?", "console.log()", "window.alert()", "All of the above"],
        answer: "All of the above"
    }
]

var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", quizStarted);

document.querySelector(".quiz").hidden = true;

function quizStarted () {
    mainPage.classList.add("hide");
    quizPage.classList.remove("hide");
    countdown();
    generateQuestions();
}

function generateQuestions () {
    console.log("Generating questions...");
    var currentQuestion  = quizList[questionIndex];
    questionIndex.textContent = currentQuestion.question;
    choiceContainer.innerHTML =  "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceElement = document.createElement("button");
    choiceElement.setAttribute("class", "btn");
    choiceElement.setAttribute("value", "choice");
}
}

function nextQuestion (event) {
    var answerButton = event.target;
}

var nextQuestion = function() {
    questionIndex++;
}

function countdown() {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + " seconds remaining";
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + " seconds remaining";
          timeLeft--;
        } else {
          timerEl.textContent = "Your time is up.";
          clearInterval(timeInterval);
    }
    }, 1000);
}


