var startBtn = document.querySelector("#start")
var startCard = document.querySelector("#start-card")
var questionCard = document.querySelector("#question-card")
var time = 100 
var score= 0
var questions = [
    {
      title: "How can you add more than one class to an HTML element?",
      choices: ["Add a second class attribute", "Add a comma between the class names", "Add a space between the class names", "Add a class-2 attibute"],
      answer: "Add a space between the class names"
    },
    {
      title: "On a technical level, what's the difference between a <section> element and a <div>?",
      choices: ["There is no difference", "A <div> element takes up more width on the page", "A <section> element has bold text by default", "A <section> element takes up more height on the page"],
      answer: "There is no difference"
    },
    {
      title: "How do you leave hidden comments in HTML code?",
      choices: ["/* */", "<!-- -->", "{{ }}", "//"],
      answer: "<!-- -->"
    },
    {
      title: "What is the command to push code to GitHub?",
      choices: ["git push origin main", "git config", "git brach", "git clone"],
      answer: "git push origin main"
    },
    {
      title: "What is the purpose of the alt attribute for images?",
        choices: ["To make the image load faster", "To make it easier to style the image with CSS", "To prevent search engines from indexing the image", "To provide context for the image"],
      answer: "To provide context for the image"
    }
  ];

// Add event listener to start button
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






// function sum(a, b){
//     // console.log(a+b)
// return a + b
// }

// sum(2, 3)
// // console.log(sum(2, 3))