var startBtn = document.querySelector("#start")
var nextButton = document.querySelector("#next-button")
var startCard = document.querySelector("#start-card")
var questionCard = document.querySelector("#question-card")
var questionElement = document.querySelector("#question")
var answerButtonsElement = document.querySelector("#answer-buttons")
var time = 100
var score= 0
let shuffledQuestions, currentQuestionIndex

var questions = [
    {
      question: "How can you add more than one class to an HTML element?",
      answers: [
        { text: "Add a second class attribute", correct: false }, 
        { text: "Add a comma between the class names", correct: false },
        { text:"Add a space between the class names", correct: true },
        { text: "Add a class-2 attibute", correct: false },
      ]}]

      console.log(questions)
    // {
    //   question: "On a technical level, what's the difference between a <section> element and a <div>?",
    //   answers: ["1. There is no difference", "2. A <div> element takes up more width on the page", "3. A <section> element has bold text by default", "4. A <section> element takes up more height on the page"],
    //   correct: "There is no difference"
    // },
    // {
    //   question: "How do you leave hidden comments in HTML code?",
    //   answers: ["1. /* */", "2. <!-- -->", "3. {{ }}", "4. //"],
    //   correct: "<!-- -->"
    // },
    // {
    //   question: "What is the command to push code to GitHub?",
    //   answers: ["1. git push origin main", "2. git config", "3. git brach", "4. git clone"],
    //   correct: "git push origin main"
    // },
    // {
    //   question: "What is the purpose of the alt attribute for images?",
    //   answers: ["1. To make the image load faster", "2. To make it easier to style the image with CSS", "3. To prevent search engines from indexing the image", "4. To provide context for the image"],
    //   correct: "To provide context for the image"
    // }
  // ];

// Add event listener to start button
startBtn.addEventListener("click", startQuiz);

function startQuiz(){
startCard.style.display = "none"
questionCard.style.display = "block"
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0

// questions.forEach((element) => {
// console.log(element.question)
// console.log(element.answers)
// // console.log(element.correct)

// });
setNextQuestion()
}

function setNextQuestion() {
  resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
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
  button.addEventListener("click", selectAnswer)
  answerButtonsElement.appendChild(button)
})
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(){

}

function timer(){
    var timeClock = setInterval(() => {
        time = time - 1
    }, 1000 );
}






// function sum(a, b){
//     // console.log(a+b)
// return a + b
// }

// sum(2, 3)
// // console.log(sum(2, 3))