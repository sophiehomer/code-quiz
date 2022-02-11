/* ----------------------------- High Scores Page ---------------------------- */
function highScores() {
    let initialsItemValue = localStorage.getItem("initials-item"); 
    let finalScoreInnerText = localStorage.getItem("display-time");
   

   $("#scoreText").append(finalScoreInnerText)
   $(".initials").append(initialsItemValue)


    // let initialsDiv = document.createElement("div");
    // initialsDiv.classList.add("initials");
   
    // let initialText= document.querySelector("#initialText");
    // let initialInput = initialText.value
    // console.log(initialInput)
    
    // let addUserInitials = document.createElement("li");
    // addUserInitials.innerText = initialInput;
    // addUserInitials.classList.add("initials-item");

    // document.body.append(initialsItemValue, finalScoreInnerText)

   

}
highScores()
