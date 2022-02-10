/* ----------------------------- High Scores Page ---------------------------- */
function highScores() {
    let initialsItemValue = localStorage.getItem("initials-item"); 
    console.log(initialsItemValue)
   
    let initialsDiv = document.createElement("div");
    initialsDiv.classList.add("initials");
   
    let initialText= document.querySelector("#initialText");
    let initialInput = initialText.value
    
    let addUserInitials = document.createElement("li");
    addUserInitials.innerText = initialInput;
    addUserInitials.classList.add("initials-item");
   document.body.append(initialsItemValue)

}
highScores()
