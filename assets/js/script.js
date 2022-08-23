var timerEl = document.getElementById("timer");
var questionHeader = document.getElementById("question-header");
var questionIndex = 0;

var quizButtons = document.querySelector(".answers");

var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", quizStarted);

document.querySelector(".quiz").hidden = true;

function quizStarted () {
    document.querySelector(".main").hidden = true;
    document.querySelector(".quiz").hidden = false;
    countdown();
    generateQuestion();
}

function generateQuestions () {
    document.querySelector(".questions").textContent = questionArray[questionList].quizStarted
    document.querySelector("#answer-one").textContent = questionArray[questionList].quizStarted
    document.querySelector("#answer-two").textContent = questionArray[questionList].quizStarted
    document.querySelector("#answer-three").textContent = questionArray[questionList].quizStarted
    document.querySelector("#answer-four").textContent = questionArray[questionList].quizStarted
}

quizButton.addEventListener("click", nextQuestion);


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

questionHeader.innerHTML = questions[0].question

var nextQuestion = function() {
    questionIndex++;
}

function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + " minutes remaining";
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + " minutes remaining";
          timeLeft--;
        } else {
          timerEl.textContent = "Your time is up.";
          clearInterval(timeInterval);
    }
    }, 1000);
}


