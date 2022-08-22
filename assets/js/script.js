var timerEl = document.getElementById('timer');
var questionHeader = document.getElementById('question-header');
var timeLeft = 300000;
var questionIndex = 0;

var questions = [
    {
        question: "Javascript is an _______ language?",
        choices: ["object-oriented", "objective-base", "procedural", "none of the above"],
        answer: "object-oriented"
    },
    {
        question: "2. Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "Both A and B", "none of the above"],
        answer: "var"
    },

]

questionHeader.innerHTML = questions[0].question

var quizStarted = function() {
    questionHeader.innerHTML = questions[questionIndex].question;
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        var btn = document.createElement("button");
        btn.addEventListener("click", nextQuestion);
        btn.innerHTML = questions[questionIndex].choices[i];
        document.querySelector(".answers").append(btn)
}
}

var nextQuestion = function() {
    questionIndex++;
    quizStarted();
}



function countdown() {



var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
    }
    }, 1000);
}


countdown();
quizStarted ();