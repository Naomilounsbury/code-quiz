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
    btn.id = "btn-a";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);
  


    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.b
    btn.id = "btn-b";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);
 

    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.c
    btn.id = "btn-c";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);
   

    var btn = document.createElement("button");
    btn.innerHTML = currentQuestion.d
    btn.id = "btn-d";
    btn.type = "button";
    btn.className = "btn"
    btn.addEventListener("click", turnBlue);
    questionDivEl.appendChild(btn);


    var btn = document.createElement("button");
    //i need a btn to go to the next question but its not working
    btn.innerHTML = "Next Question"
    //fuck you buttons
    btn.id = "next-question";
    btn.type = "button";
    btn.addEventListener("click", nextQuestion);
    questionDivEl.appendChild(btn);


    //create a separate onclick that changes the current question to something else
    //create a next question button that will go on to the next question and save your answer
    console.log("hello")
}
var nextQuestion = function() {

    //need to save the blue answer if background color is blue whe get the id of the btn
    //and compare it to the answer
    //saving all the btns in a variable
    var btnList = document.querySelectorAll(".btn");
    //I originally put var here but it can't be a variable because I need to reset it to something else inside the for loop
    let checkIt = ""
    for(let i = 0; i < btnList.length; i++){
        //if the background color is blue then I am setting the variable checkit to the btn id
        //this will hopefully save the btn id
        if (btnList[i].style.backgroundColor === "blue"){
            checkIt = btnList[i].id
        }
        }

    //the first paramenter of verifyAnswer is the current question
    verifyAnswer(questions[questionIndex], checkIt)
    
    
    //questionIndex++=questionIndex plus 1, which would change our index to the next question in our list
    questionIndex++
    console.log(questionIndex)
    //change the innertext for the question
    var currentQuestion = questions[questionIndex];
    questionDivEl.innerText = currentQuestion.question
    //update answer options 
    


}
var turnBlue = function(event){
    console.log(event)
    //when btn onclick, turn btn blue
    //so I made a variable to select all the buttons to change color when they are clicked
    //because I want them to turn blue when clicked but I also don't want them to all turn blue
    //I want whichever is the most recent clicked button to turn blue
    //I didn't know how to do this so w3schools https://www.w3schools.com/js/js_htmldom_nodelist.asp
    //was very helpful
     var btnList = document.querySelectorAll(".btn")
    for(let i = 0; i < btnList.length; i++){
        btnList[i].style.backgroundColor = "white"}
    event.target.style.backgroundColor = "blue";
    
}
//whenever we call verifyAnswer, we are feeding it the current question
var verifyAnswer =function(currentQuestion, btnId){
    //btn- is an empty string and we are replaing it as an empty string so the remaining part of the string a, b, c, or d is left as the received answer
    //fuck replacing parts of strings
    var receivedAnswer = btnId.replace("btn-","")
    console.log(btnId, receivedAnswer)
    

    //check recieved answer against the current question aswer
    //if answer is correct, update overallScore
    //if answer is incorrect, update overallScore and steal time
    //

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
        c: "git add",
        d: "git commit",
    },
    {
        question: "What is a callback function?",
        answer: "b",
        a: "a function that is inside another function",
        b: "a function passed as an argument to another function",
        c: "a function that runs after a set delay",
        d: "a function that runs forever",

    },
    {
        question: "What does DOM stand for?",
        answer: "b",
        a: "Data Object Monitor",
        b: "Document Object Model",
        c: "Dynamic Object Monitor",
        d: "Data Object Model",

    },
    {
        question: "What does event.preventDefault do when added to a function?",
        answer: "a",
        a: "it prevents the default action that belongs to the event from running",
        b: "it stops all code from running",
        c: "it makes the text on the page stand up and dance a jig",
        d: "it creates a new default for the function",

    }

]
