var startBtn = document.querySelector("#start")
var backBtn = document.querySelector("#back")
var startCard = document.querySelector("#start-card")
var questionCard = document.querySelector("#question-card")
var questionElement = document.querySelector("#question")
var answerButtonsElement = document.querySelector("#answer-buttons")
var finalCard = document.querySelector("#final-card")
var scoreCard = document.querySelector("#score-card")
var submitBtn=document.querySelector(".submit-btn")
var time = 100
var score= 0
let currentQuestionIndex 

// Quiz Questions & Answers
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

// Event Listeners
startBtn.addEventListener("click", startQuiz);
backBtn.addEventListener("click", back);

// Timer
// var count = 75;
// var interval = setInterval(function(){
//   document.getElementById('count').innerHTML=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('count').innerHTML='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }, 1000);

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
// Next Question
function setNextQuestion() {

// If all questions have been answered, end the quiz
  if (currentQuestionIndex >= questions.length){
  endQuiz()
  }
// Otherwise keep displaying questions
  else {
   resetState()
   showQuestion(questions[currentQuestionIndex])}
}

// Display Question Card
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
})}

// Reset Question Card
function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }}

// Select Answers
function selectAnswer(event){ 
 var selectedButton = event.target

// If User Selects The Correct Answer
 if (selectedButton.dataset.correct) { console.log("correct")
 var correct = document.createElement("p")
 correct.textContent = "correct"
 answerButtonsElement.appendChild(correct)

 currentQuestionIndex++ 
 console.log(currentQuestionIndex)
 setNextQuestion()
}

// If User Selects The Incorrect Answer
else {
 var correct = document.createElement("p")
 correct.textContent = "Wrong!"
 console.log(answerButtonsElement)

console.log(answerButtonsElement.lastElementChild.textContent)
if (answerButtonsElement.lastElementChild.textContent !== "Wrong!") {
  answerButtonsElement.appendChild(correct)
}}}

// End Quiz 
function endQuiz() {
  questionCard.style.display = "none"
  finalCard.style.display = "block"
  submitBtn.addEventListener("click", addInitials);
}

// Add Initials
function addInitials(event){
 event.preventDefault()
 localStorage.setItem("initials-item", "initialInput")
 window.location.replace("highscores.html"); 
 highScores()
}

// High Score Page 
function highScores() {
 var initialsItemValue = localStorage.getItem("initialsInput")
 console.log(initialsItemValue)
 
 console.log(initialsDiv, "hello world")
 var initialsDiv = document.createElement("div");
 initialsDiv.classList.add("initials")

 var initialText= document.querySelector("#initialText")
 var initialInput = initialText.value
 console.log(initialInput)

 var addUserInitials = document.createElement("li");
 addUserInitials.innerText = initialInput
 addUserInitials.classList.add("initials-item")

 initialsDiv.appendChild(addUserInitials);
 document.body.append(initialsDiv)
}

// Back Button
function back () {
  console.log(back, "hihi") 
  window.location.replace("file:///Users/Sophie/Desktop/projects/challenges/code-quiz/index.html")
   
  }
 
// Clear High Scores Button








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