var startBtn = document.querySelector("#start")
var startCard = document.querySelector("#start-card")
var questionCard = document.querySelector("#question-card")
var time = 100 
// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);

function startQuiz(){
startCard.style.display = "none"
questionCard.style.display = "block"
}

function timer(){
    var timeClock = setInterval(() => {
        time = time - 1
    }, 1000 );
}

function sum(a, b){
    // console.log(a+b)
return a + b
}

sum(2, 3)
// console.log(sum(2, 3))