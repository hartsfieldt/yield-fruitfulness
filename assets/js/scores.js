var pastScores = document.querySelector(".pastscores");
var highScores;

function listScores() {
  highScores = JSON.parse(localStorage.getItem("storeScore"));
  for (i = 0; i < highScores.length; i++) {
    var scoreListItem = document.createElement("li");
    scoreListItem.textContent = highScores[i].name;
    pastScores.appendChild(scoreListItem);
  }
}

listScores();
