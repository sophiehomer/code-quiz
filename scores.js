/* ----------------------------- High Scores Page ---------------------------- */
function highScores() {
    let initialsItemValue = localStorage.getItem("initials-item"); 
    let finalScoreInnerText = localStorage.getItem("display-time");
    console.log(initialsItemValue)
    console.log(finalScoreInnerText)
   
    let initialsDiv = document.createElement("div");
    initialsDiv.classList.add("initials");
   
    let initialText= document.querySelector("#initialText");
    let initialInput = initialText.value
    
    let addUserInitials = document.createElement("li");
    addUserInitials.innerText = initialInput;
    addUserInitials.classList.add("initials-item");
    document.body.append(initialsItemValue, finalScoreInnerText)


}
highScores()
