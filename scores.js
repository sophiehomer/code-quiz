/* ----------------------------- High Scores Page ---------------------------- */
function highScores() {
    let initialsItemValue = localStorage.getItem("initials-item"); 
    console.log(initialsItemValue)
   
    let initialsDiv = document.createElement("div");
    initialsDiv.classList.add("initials");
   
    let initialText= document.querySelector("#initialText");
    console.log(initialText)
    let initialInput = initialText.value
    
   
    let addUserInitials = document.createElement("li");
    addUserInitials.innerText = initialInput;
    addUserInitials.classList.add("initials-item");
   
    initialsDiv.appendChild(addUserInitials);
    document.body.append(initialsDiv);
   
     // let initialShow = document.querySelector(".initial-list");
     // initialShow.textContent = initialInput
     // initialsDiv.appendChild(addUserInitials)
    // document.body.append(initialsDiv);
   }
   highScores()
