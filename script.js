/* -------------------------------- Variables ------------------------------- */
let startBtn = document.querySelector("#start")
let startCard = document.querySelector("#start-card")
let questionCard = document.querySelector("#question-card")
let questionElement = document.querySelector("#question")
let answerButtonsElement = document.querySelector("#answer-buttons")
let submitBtn=document.querySelector("#submit-btn")
let finalCard = document.querySelector("#final-card")
let time = 100
let finalScore = document.querySelector("#display-time")
let initialText = document.querySelector("#initialText")


let currentQuestionIndex 
let questions = [
    {question: "How can you add more than one class to an HTML element?",
      answers: [
        { text:"1. Add a second class attribute", correct: false }, 
        { text:"2. Add a comma between the class names", correct: false },
        { text:"3. Add a space between the class names", correct: true },
        { text:"4. Add a class-2 attibute", correct: false },]},

    {question: "On a technical level, what's the difference between a <section> element and a <div>?",
      answers: [
        { text:"1. There is no difference", correct: true },
        { text:"2. A <div> element takes up more width on the page", correct: false },
        { text:"3. A <section> element has bold text by default", correct: false },
        { text:"4. A <section> element takes up more height on the page", correct: false }]},
      
    {question: "How do you leave hidden comments in HTML code?",
      answers: [
        { text:"1. /* */", correct: false },
        { text:"2. <!-- -->", correct: true },
        { text:"3. {{ }}", correct: false },
        { text:"4. //", correct: false }
      ]},

    {question: "What is the command to push code to GitHub?",
      answers: [
        { text:"1. git push origin main", correct: true },
        { text:"2. git config", correct: false },
        { text:"3. git brach", correct: false },
        { text:"4. git clone", correct: false }
      ]},
      
    {question: "What is the purpose of the alt attribute for images?",
      answers: [
        { text:"1. To make the image load faster", correct: false },
        { text:"2. To make it easier to style the image with CSS", correct: false },
        { text:"3. To prevent search engines from indexing the image", correct: false },
        { text:"4. To provide context for the image", correct: true }
      ]}];

/* ------------------------------- Start Quiz ------------------------------- */
let timeInterval;
startBtn.addEventListener("click", startQuiz)

function startQuiz(){
 currentQuestionIndex = 0
 startCard.style.display = "none"
 questionCard.style.display = "block"
 /* ---------------------------------- Timer --------------------------------- */
 timeInterval = setInterval(function() {
  if (time === 0) {
    $("#display-time").text(time);
    clearInterval(timeInterval);
   endQuiz()
  } else {
    $("#display-time").text(time);
    time--;
  }
}, 1000);
 setNextQuestion()
}

/* ----------------------------- Next Question ---------------------------- */
function setNextQuestion() {
  if (currentQuestionIndex >= questions.length){
  endQuiz()
  }
  else {
   resetState()
   showQuestion(questions[currentQuestionIndex])}
}

/* -------------------------- Display Question Card ------------------------- */
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
  let button = document.createElement("button")
  button.innerText = answer.text
  button.classList.add("btn")
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.onclick = selectAnswer
  answerButtonsElement.appendChild(button)
  console.dir(button)
})}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }}

/* ----------------------------- Select Answers ----------------------------- */
function selectAnswer(event){ 
 let selectedButton = event.target
 /* --------------------------------- Correct Answer -------------------------------- */
 if (selectedButton.dataset.correct) { console.log("correct")
 let correct = document.createElement("p")
 correct.textContent = "correct"
 answerButtonsElement.appendChild(correct)
 currentQuestionIndex++ 
 setNextQuestion()
}
/* -------------------------------- Incorrect Answer ------------------------------- */
else {
 let correct = document.createElement("p")
 correct.textContent = "Wrong!"
 console.log(answerButtonsElement)
 time=time -10

console.log(answerButtonsElement.lastElementChild.textContent)
if (answerButtonsElement.lastElementChild.textContent !== "Wrong!") {
  answerButtonsElement.appendChild(correct)
}}}

/* -------------------------------- End Quiz -------------------------------- */
let finalScoreInnerText;
function endQuiz() {
  clearInterval(timeInterval)
  questionCard.style.display = "none"
  finalCard.style.display = "block"

  //document.body.append(finalScore)
  $("#scoreText").append(finalScore)
  console.log(finalScore)

  submitBtn.addEventListener("click", addInitials);
}

/* ------------------------------ Add Initials ------------------------------ */
function addInitials(event){
 event.preventDefault()
 let object = {
  initials: initialText.value,
  score: finalScore.innerText
 }
 
 localStorage.setItem("initials-item", initialText.value);
 localStorage.setItem("display-time", finalScore.innerText);
 window.location.href = "highscores.html"
}

