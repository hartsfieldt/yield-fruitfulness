var pastScores = document.querySelector(".pastscores");
var refreshScore = document.querySelector("#refresh-score");
var highscores = JSON.parse(localStorage.getItem("scoreStore"));

// loads scores on the page and clear the score from local storage
function listScores() {
  for (i = 0; i < highscores.length; i++) {
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = `${highscores[i].name} score ${highscores[i].score}`;
    pastScores.appendChild(scoreListItem);
  }
}

function clearScore() {
  localStorage.clear();
  location.reload();
}

refreshScore.addEventListener("click", clearScore);
listScores();
