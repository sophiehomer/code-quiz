var startBtn = document.querySelector("#start")
var startCard = document.querySelector("#start-card")
var questionCard = document.querySelector("#question-card")
var time = 100
var score= 0
var questions = [
    {
      title: "How can you add more than one class to an HTML element?",
      options: ["1. Add a second class attribute", "2. Add a comma between the class names", "3. Add a space between the class names", "4. Add a class-2 attibute"],
      answer: "Add a space between the class names"
    },
    {
      title: "On a technical level, what's the difference between a <section> element and a <div>?",
      options: ["1. There is no difference", "2. A <div> element takes up more width on the page", "3. A <section> element has bold text by default", "4. A <section> element takes up more height on the page"],
      answer: "There is no difference"
    },
    {
      title: "How do you leave hidden comments in HTML code?",
      options: ["1. /* */", "2. <!-- -->", "3. {{ }}", "4. //"],
      answer: "<!-- -->"
    },
    {
      title: "What is the command to push code to GitHub?",
      options: ["1. git push origin main", "2. git config", "3. git brach", "4. git clone"],
      answer: "git push origin main"
    },
    {
      title: "What is the purpose of the alt attribute for images?",
      options: ["1. To make the image load faster", "2. To make it easier to style the image with CSS", "3. To prevent search engines from indexing the image", "4. To provide context for the image"],
      answer: "To provide context for the image"
    }
  ];

// Add event listener to start button
startBtn.addEventListener("click", startQuiz);

function startQuiz(){
startCard.style.display = "none"
questionCard.style.display = "block"

questions.forEach((element) => {
// console.log(element.title)
console.log(element.options)
});



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