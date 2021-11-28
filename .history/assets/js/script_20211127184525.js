//first I am grabbing my variables from the html so that I can later use them inside functions
var formEl = document.querySelector("#questions-form");
var questionDivEl = document.querySelector(".question");
//the thing I want to do with this local storage is be able to 
//store the answers and scores of the quiz
//localStorage.setItem("questionIndex", "0")
let questionIndex = 0
console.log(questionDivEl)
//I want to create an onclick function eventually 
//so I'm creating my function 
var onStartQuiz = function () {
    //when the quiz starts it grabs the first object in the array
    var currentQuestion = questions[questionIndex];

    //its going into the html and taking the div clas question and setting the value equal to the current question
    questionDivEl.innerText = currentQuestion.question

    //I created buttons with create element
    //and then I added stuff to the button from the array using btn.innerHtml.
    //and then I had document.questionDivEl to get the variable but that didn't work
    //so finally I deleted the "document" and it worked but I'm not exactly sure why because I just checked the taskinator to see
    var btn = document.createElement("BUTTON");
    btn.innerHTML = currentQuestion.a
    questionDivEl.appendChild(btn);

    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.b
    questionDivEl.appendChild(btn);

    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.c
    questionDivEl.appendChild(btn);

    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.d
    questionDivEl.appendChild(btn);

    var btn = document.createElement("button");
    //i need a btn to go to the next question but its not working
    btn.innerHTML = "Next Question"
    btn.addEventListener("click", nextQuestion)
    questionDivEl.appendChild(btn);

    //create a separate onclick that changes the current question to something else
    //create a next question button that will go on to the next question and save your answer
    console.log("hello")
}
var nextQuestion = function() {
    //questionIndex++=questionIndex plus 1
    questionIndex++
    console.log(questionIndex)
    



}
//making an array of questions
var questions = [
    {
        //right now the key question is a string
        question: "To create an array, what kid of brackets are used?",
        answer: "a",
        a: "square brackets",
        b: "angle brackets",
        c: "curly brackets",
        d: "parentheses",
        //an array holds a list of items and since each question is an object we need a fucking comma
    },
    {
        question: "how do you create a branch with github?",
        answer: "b",
        a: "git push",
        b: "git branch",
        c: "git checkout",
        d: "git commit",
    },
    {
        question: "To create an array, what kid of brackets are used?",
        answer: "a",
        a: "square brackets",
        b: "angle brackets",
        c: "curly brackets",
        d: "parentheses",

    }
]
