/* ----------------------------- High Scores Page ---------------------------- */
function highScores() {
    let initialsItemValue = localStorage.getItem("initials-item"); 
    let finalScoreInnerText = localStorage.getItem("display-time");
    let scoreBtn = document.querySelector("#score-btn");

   $("#scoreText").append(finalScoreInnerText)
   $(".initials").append(initialsItemValue)

   scoreBtn.addEventListener("click", scoreBtn);
   
  
}
highScores()
