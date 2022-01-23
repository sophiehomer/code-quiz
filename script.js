var startBtn = document.querySelector("#start")
var backBtn = document.querySelector("#back-btn")
var startCard = document.querySelector("#start-card")
var questionCard = document.querySelector("#question-card")
var questionElement = document.querySelector("#question")
var answerButtonsElement = document.querySelector("#answer-buttons")
var finalCard = document.querySelector("#final-card")
var scoreCard = document.querySelector("#score-card")
var submitBtn=document.querySelector("#submit-btn")
var time = 100
var score= 0
let currentQuestionIndex

var questions = [
    {
      question: "How can you add more than one class to an HTML element?",
      answers: [
        { text:"1. Add a second class attribute", correct: false }, 
        { text:"2. Add a comma between the class names", correct: false },
        { text:"3. Add a space between the class names", correct: true },
        { text:"4. Add a class-2 attibute", correct: false },
      ]},

    {
      question: "On a technical level, what's the difference between a <section> element and a <div>?",
      answers: [
        { text:"1. There is no difference", correct: true },
        { text:"2. A <div> element takes up more width on the page", correct: false },
        { text:"3. A <section> element has bold text by default", correct: false },
        { text:"4. A <section> element takes up more height on the page", correct: false }
      ]},
      
    {
      question: "How do you leave hidden comments in HTML code?",
      answers: [
        { text:"1. /* */", correct: false },
        { text:"2. <!-- -->", correct: true },
        { text:"3. {{ }}", correct: false },
        { text:"4. //", correct: false }
      ]},

    {
      question: "What is the command to push code to GitHub?",
      answers: [
        { text:"1. git push origin main", correct: true },
        { text:"2. git config", correct: false },
        { text:"3. git brach", correct: false },
        { text:"4. git clone", correct: false }
      ]},
    {
      question: "What is the purpose of the alt attribute for images?",
      answers: [
        { text:"1. To make the image load faster", correct: false },
        { text:"2. To make it easier to style the image with CSS", correct: false },
        { text:"3. To prevent search engines from indexing the image", correct: false },
        { text:"4. To provide context for the image", correct: true }
      ]}];

// Add event listener to start button
startBtn.addEventListener("click", startQuiz);
// Start quiz
function startQuiz(){
 currentQuestionIndex = 0
 startCard.style.display = "none"
 questionCard.style.display = "block"
 questions.forEach((element) => {
 console.log(element.question)
 console.log(element.answers)
});
  setNextQuestion()
}

function setNextQuestion() {
  console.log(currentQuestionIndex, "hello")
  resetState()
  if (currentQuestionIndex >= questions.length){
  // console.log("hello world")
  endQuiz()
  
  }
  else resetState()
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
  var button = document.createElement("button")
  button.innerText = answer.text
  button.classList.add("btn")
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.onclick = selectAnswer
  answerButtonsElement.appendChild(button)
  console.dir(button)
})

}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  
}

function selectAnswer(event){ 
 var selectedButton = event.target
 
 if (selectedButton.dataset.correct) { console.log("correct")
 var correct = document.createElement("p")
 correct.textContent = "correct"
 answerButtonsElement.appendChild(correct)

 currentQuestionIndex++ 
 console.log(currentQuestionIndex)
 setNextQuestion()
}

else {
 var correct = document.createElement("p")
 correct.textContent = "Wrong!"
 answerButtonsElement.appendChild(correct)

}
}

function endQuiz() {
  questionCard.style.display = "none"
  finalCard.style.display = "block"
  submitBtn.addEventListener("click", addInitials);
  addInitials()
}

function addInitials(){
  startCard.style.display = "none"
  finalCard.style.display = "block"
  scoreCard.style.display = "none"

 var initialsDiv = document.createElement("div");
 initialsDiv.classList.add("initials")

 var addUserInitials = document.createElement("li");
 addUserInitials.innerText = "hey";
 addUserInitials.classList.add("initials-item")

 initialsDiv.appendChild(addUserInitials);
 document.body.append(initialsDiv)
 
 
 
}




// crate array for high scores
// var highscores = [];

// var highScoresHandler = function(event){

// }



// backBtn.addEventListener("click", startQuiz); // change to start card
// // Takes user to homepage
// function startQuiz(){ // change to start card

// }




















// function clearStatusClass() {
//   element.classList.remove("correct")
//   element.classList.remove("wrong")
// }

// function timer(){
//     var timeClock = setInterval(() => {
//         time = time - 1
//     }, 1000 );
// }