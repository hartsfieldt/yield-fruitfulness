var questions = document.getElementById("questions");
var mainPage = document.getElementById("main-page");
var quizPage = document.getElementById("quiz-page");

highScoreArray = [];
letShuffledQuestions = []
var questionCount = 0;
var answersCorrect = 0;
let countdown = 75;

var timerText = document.getElementById("timer");
timerText.textContent = "Timer: " + countdown;

var quizButtons = document.getElementById(".answers");
var answerButtonOne = document.getElementById("#answer-one");
var answerButtonTwo = document.getElementById("#answer-two");
var answerButtonThree = document.getElementById("#answer-three");
var answerButtonFour = document.getElementById("#answer-four");

const questionList = [
    {
        question: "Javascript is an _______ language?",
        answerOne: "object-oriented",
        answerTwo:"objective-base",
        answerThree:"procedural",
        answerFour:"none of the above",
        correctAnswer: "answerA",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answerOne: "var",
        answerTwo:"let",
        answerThree:"Both A and B",
        answerFour:"none of the above",
        correctAnswer: "answerA",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answerOne: "getElementbyId()",
        answerTwo:"getElementsByClassName()",
        answerThree:"Both A and B",
        answerFour:"none of the above",
        correctAnswer: "answerThree",
    },
    {
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answerOne: "Throws an error",
        answerTwo:"Ignores the statements",
        answerThree:"Gives a warning",
        answerFour:"none of the above",
        correctAnswer: "AnswerTwo",
    },
    {   question: "Which of the following methods can be used to display data in some form using Javascript?",
        answerOne: "document.write()?",
        answerTwo:"console.log()",
        answerThree:"window.alert()",
        answerFour:"All of the above",
        correctAnswer: "answerFour",
    }
]

var startButton = document.getElementById("start-btn");
startButton.addEventListener("click", quizStarted);

function quizStarted () {
    mainPage.classList.add("hide");
    quizPage.classList.remove("hide");
    beginCountdown();
    generateQuestions();
}

function generateQuestions () {

    document.getElementById("#questions").innerHTML = currentQuestion.question;
    document.getElementById("#answer-one").innerHTML = currentQuestion.answerOne;
    document.getElementById("#answer-two").innerHTML = currentQuestion.answerTwo;
    document.getElementById("#answer-three").innerHTML = currentQuestion.answerThree;
    document.getElementById("#answer-four").innerHTML = currentQuestion.answerFour;

    answerButtons.addEventListener("click", nextQuestion);
}

function beginCountdown() {
    var timeInterval = setInterval(function () {
        if (countdown >= 1) {
          timerText.textContent = "Timer: " + countdown + " minutes remaining";
          countdown--;
        } else {
          timerText.textContent = "Your time is up.";
          clearInterval(timeInterval);
          finishedQuiz();
    }
    }, 1000);
}