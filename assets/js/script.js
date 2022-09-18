var i = 0;
var currentSection = "";
var timeLeft = 20;
var clearTime;

//sections
var infoSection = document.querySelector(".info");
var quizSection = document.querySelector(".quiz");
var resultsSection = document.querySelector(".results");

//elements
var startQuiz = document.querySelector(".startquiz");
var answerBtn1 = document.querySelector(".answer1");
var answerBtn2 = document.querySelector(".answer2");
var answerBtn3 = document.querySelector(".answer3");
var answerBtn4 = document.querySelector(".answer4");
var questionEl = document.querySelector(".question");
var countdownEl = document.querySelector(".countdown");
var answerMsgEl = document.querySelector(".answermsg");
var currentScoreEl = document.querySelector(".score");
var submitButtonEL = document.querySelector("#submitbtn");

var questions = [
  {
    question: "Javascript is an _______ language?",
    answers: [
      "A. Object-oriented",
      "B. Objective-base",
      "C. Procedural",
      "D. None of the above",
    ],
    correctAnswer: "A. Object-oriented",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["A. var", "B. let", "C. Both A and B", "D. None of the above"],
    correctAnswer: "C. Both A and B",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      "A. getElementbyId()",
      "B. getElementsByClassName()",
      "C. Both A and B",
      "D. None of the above",
    ],
    correctAnswer: "C. Both A and B",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: [
      "A. Throws an error",
      "B. Ignores the statements",
      "C. Gives a warning",
      "D. none of the above",
    ],
    correctAnswer: "B. Ignores the statements",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
      "A. document.write()?",
      "B. console.log()",
      "C. window.alert()",
      "D. All of the above",
    ],
    correctAnswer: "D. All of the above",
  },
];

function timer() {
  if (timeLeft <= 0) {
    currentSection = "results";
    sectionHandler();
  } else {
    timeLeft--;
    countdownEl.textContent = timeLeft;
  }
}

//upon load question, choices
function sectionHandler() {
  if (currentSection === "info") {
    infoSection.classList.add("show");
    quizSection.classList.add("hide");
    resultsSection.classList.add("hide");

    infoSection.classList.remove("hide");
    quizSection.classList.remove("show");
    resultsSection.classList.remove("show");
  } else if (currentSection === "quiz") {
    infoSection.classList.add("hide");
    quizSection.classList.add("show");
    resultsSection.classList.add("hide");

    infoSection.classList.remove("show");
    quizSection.classList.remove("hide");
    resultsSection.classList.remove("show");
    askQuestions();
  } else if (currentSection === "results") {
    infoSection.classList.add("hide");
    quizSection.classList.add("hide");
    resultsSection.classList.add("show");

    infoSection.classList.remove("show");
    quizSection.classList.remove("show");
    resultsSection.classList.remove("hide");
  }
}

function quizHandler() {
  currentSection = "quiz";
  sectionHandler();
}

function askQuestions() {
  countdownEl.textContent = timeLeft;
  clearTime = setInterval(timer, 1000);
  answerBtn1.addEventListener("click", function () {
    checkAnswer(answerBtn1);
  });
  answerBtn2.addEventListener("click", function () {
    checkAnswer(answerBtn2);
  });
  answerBtn3.addEventListener("click", function () {
    checkAnswer(answerBtn3);
  });
  answerBtn4.addEventListener("click", function () {
    checkAnswer(answerBtn4);
  });
  questionHandler(0);
}

function questionHandler(i) {
  questionEl.textContent = questions[i].question;
  answerBtn1.textContent = questions[i].answers[0];
  answerBtn2.textContent = questions[i].answers[1];
  answerBtn3.textContent = questions[i].answers[2];
  answerBtn4.textContent = questions[i].answers[3];
}

function checkAnswer(element) {
  correct = questions[i].correctAnswer;
  if (element.textContent === correct) {
    answerMsg("Correct!");
  } else {
    answerMsg("Incorrect!");
    timeLeft = timeLeft - 10;
  }
  i++;
  if (i === questions.length) {
    quizEnded();
  } else {
    questionHandler(i);
  }
}

function answerMsg(response) {
  answerMsgEl.textContent = response;
  setTimeout(function () {
    answerMsgEl.textContent = null;
  }, 2000);
}

function quizEnded() {
  clearInterval(clearTime);
  currentSection = "results";
  sectionHandler();
  currentScoreEl.textContent = timeLeft;
}

submitButtonEL.addEventListener("click", function (event) {
  event.preventDefault();
  var allScores = localStorage.getItem("allScores");
  if (allScores === null) {
    allScores = [];
  } else {
    allScores = JSON.parse(allScores);
  }

  var usersScore = timeLeft;
  var usersInitials = document.querySelector(".initials").value.trim();
  var finalScore = {
    name: usersInitials,
    score: usersScore,
  };
  allScores.push(finalScore);
  var newScore = JSON.stringify(allScores);
  localStorage.setItem("allScores", newScore);
});

startQuiz.addEventListener("click", quizHandler);

// var questions = document.getElementById("questions");
// var mainPage = document.getElementById("main-page");
// var quizPage = document.getElementById("quiz-page");

// var timerText = document.getElementById("timer");
// timerText.textContent = "Timer: " + countdown;

// highScoreArray = [];
// var questionCounter = 0;
// var answersCorrect = 0;
// let countdown = 75;

// var startButton = document.getElementById("start-btn");
// startButton.addEventListener("click", quizStarted);

// function quizStarted () {
//     mainPage.classList.add("hide");
//     quizPage.classList.remove("hide");
//     beginCountdown();
//     generateQuestions();
// }

// const questionOne = {
//         question: "Javascript is an _______ language?",
//         answerOne: "object-oriented",
//         answerTwo:"objective-base",
//         answerThree:"procedural",
//         answerFour:"none of the above",
//         correctAnswer: "answerA",
// };

// const questionTwo = {
//         question: "Which of the following keywords is used to define a variable in Javascript?",
//         answerOne: "var",
//         answerTwo:"let",
//         answerThree:"Both A and B",
//         answerFour:"none of the above",
//         correctAnswer: "answerA",
// };

// const questionThree = {
//         question: "Which of the following methods is used to access HTML elements using Javascript?",
//         answerOne: "getElementbyId()",
//         answerTwo:"getElementsByClassName()",
//         answerThree:"Both A and B",
//         answerFour:"none of the above",
// };

// const questionFour = {
//         question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
//         answerOne: "Throws an error",
//         answerTwo:"Ignores the statements",
//         answerThree:"Gives a warning",
//         answerFour:"none of the above",
// };

// const questionFive = {
//         question: "Which of the following methods can be used to display data in some form using Javascript?",
//         answerOne: "document.write()?",
//         answerTwo:"console.log()",
//         answerThree:"window.alert()",
//         answerFour:"All of the above",
// };

// const questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// var quizButtons = document.querySelector(".answers")
// var answerButtonOne = document.getElementById("answer-one");
// var answerButtonTwo = document.getElementById("answer-two");
// var answerButtonThree = document.getElementById("answer-three");
// var answerButtonFour = document.getElementById("answer-four");

// // var startButton = document.getElementById("start-btn");
// // startButton.addEventListener("click", quizStarted);

// // function quizStarted () {
// //     mainPage.classList.add("hide");
// //     quizPage.classList.remove("hide");
// //     beginCountdown();
// //     generateQuestions();
// // }

// function generateQuestions () {

//     if (questionCounter === 5) {
//         finishedQuiz();
//         return;
//     }

//     document.querySelector("#questions").textContent = questionArray[questionCounter].question;
//     document.querySelector("#answer-one").textContent = questionArray[questionCounter].answerOne;
//     document.querySelector("#answer-two").textContent = questionArray[questionCounter].answerTwo;
//     document.querySelector("#answer-three").textContent = questionArray[questionCounter].answerThree;
//     document.querySelector("#answer-four").textContent = questionArray[questionCounter].answerFour;

//     quizButtons.addEventListener("click", nextQuestion);

//     if (questionCounter === 1) {
//         answerButtonOne.dataset.answer = "correct";
//         answerButtonTwo.dataset.answer = "incorrect";
//         answerButtonThree.dataset.answer = "incorrect";
//         answerButtonFour.dataset.answer = "incorrect";
//     }

//     else if (questionCounter === 2) {
//         answerButtonOne.dataset.answer = "correct";
//         answerButtonTwo.dataset.answer = "incorrect";
//         answerButtonThree.dataset.answer = "incorrect";
//         answerButtonFour.dataset.answer = "incorrect";
//     }

//     else if (questionCounter === 3) {
//         answerButtonOne.dataset.answer = "incorrect";
//         answerButtonTwo.dataset.answer = "incorrect";
//         answerButtonThree.dataset.answer = "correct";
//         answerButtonFour.dataset.answer = "incorrect";
//     }

//     else if (questionCounter === 4) {
//         answerButtonOne.dataset.answer = "incorrect";
//         answerButtonTwo.dataset.answer = "incorrect";
//         answerButtonThree.dataset.answer = "incorrect";
//         answerButtonFour.dataset.answer = "correct";
//     }

// }

// function nextQuestion () {
//     var target = event.target;
//     if (target.dataset.answer === "correct") {
//         answerStatus("Correct!");
//         answersCorrect++;
//     }
//     else {
//         answerStatus("Incorrect!");
//         countdown -= 12;
//         timerText.textContent = "Timer: " + countdown;
//     }
//     questionCounter++;
//     populateQuestions();
// }

// function beginCountdown() {
//     var timeInterval = setInterval(function () {
//         if (countdown >= 1) {
//           timerText.textContent = "Timer: " + countdown + " minutes remaining";
//           countdown--;
//         } else {
//           timerText.textContent = "Your time is up.";
//           clearInterval(timeInterval);
//           finishedQuiz();
//     }
//     }, 1000);
// }

// function finishSubmit (event) {
//     event.preventDefault();
//     var initials = document.querySelector("#initials-input").value;

//     if (!initials) {
//          alert("Please insert your initials to save your score!");
//          return false;
//      }
//      else {
//         var finalScore = {
//             initials: initials,
//             score: countdown
//         };
//         highScoresArray.push(finalScore);
//         saveHighScores();
//         window.location.href="./view-high-scores.html";
//      }
// }

// function saveHighScores () {
//     localStorage.setItem("scores", JSON.stringify(highScoresArray));
// }

// function loadScoresHistory () {
//     scoresHistory = localStorage.getItem("scores");
//     scoresHistory = JSON.parse(scoresHistory);
//     scoresHistoryArray = scoresHistory;

//     if (scoresHistoryArray === undefined) {
//         scoresHistoryArray = [];
//     }

//     for ( i = 0; i < scoresHistoryArray.length; i++) {
//         var listItemElement = document.createElement("li");
//         listItemElement.className = "text-box";
//         listItemElement.textContent = scoresHistory [i].initial + " " + scoresHistory [i].score;
//         document.querySelector(".score-list").appendChild(listItemElement);
//     }
// }

// loadScoresHistory ();
