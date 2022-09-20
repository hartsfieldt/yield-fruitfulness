var i = 0;
var currentSection = "";
var timeLeft = 60;
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
var hideTimer = document.querySelector(".timer");

// quiz questions
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

// keeps track of time and ends the quiz
function timer() {
  if (timeLeft <= 0) {
    timeLeft = 0;
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
    hideTimer.classList.add("hide");

    infoSection.classList.remove("hide");
    quizSection.classList.remove("show");
    resultsSection.classList.remove("show");
    hideTimer.classList.remove("show");
  } else if (currentSection === "quiz") {
    infoSection.classList.add("hide");
    quizSection.classList.add("show");
    resultsSection.classList.add("hide");
    hideTimer.classList.add("show");

    infoSection.classList.remove("show");
    quizSection.classList.remove("hide");
    resultsSection.classList.remove("show");
    hideTimer.classList.remove("hide");
    askQuestions();
  } else if (currentSection === "results") {
    infoSection.classList.add("hide");
    quizSection.classList.add("hide");
    resultsSection.classList.add("show");
    hideTimer.classList.add("hide");

    infoSection.classList.remove("show");
    quizSection.classList.remove("show");
    resultsSection.classList.remove("hide");
    hideTimer.classList.remove("show");
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
  if (timeLeft <= 0) {
    currentScoreEl.textContent = "0";
  } else {
    currentScoreEl.textContent = timeLeft;
  }
}

submitButtonEL.addEventListener("click", function (event) {
  event.preventDefault();
  var oldScore = JSON.parse(localStorage.getItem("scoreStore"));
  localStorage.clear();
  if (oldScore === null) {
    oldScore = Array();
  }

  var usersScore = timeLeft;
  var usersInitials = document.querySelector(".initials").value.trim();
  var finalScore = {
    name: usersInitials,
    score: usersScore,
  };
  oldScore.push(finalScore);
  localStorage.setItem("scoreStore", JSON.stringify(oldScore));
  window.location.href = "view-high-score.html";
});

startQuiz.addEventListener("click", quizHandler);
