
//I want to create an onclick function eventually 
//so I'm creating my function 
var onStartQuiz = function(){
    //when the quiz starts it grabs the first object in the array
    var currentQuestion = questions[0];
    
    
    //its going into the html and taking the div clas question and setting the value equal to the current question
    //document.getElementById("question").innerText = currentQuestion.question
    
    //I dont know why these arent working and I'm crying
    var btn = document.createElement("BUTTON");
    btn.innerHTML = currentQuestion.a
     document.body.appendChild(btn);
    // document.createElement("button");
    // document.getElementById("a").textContent = currentQuestion.a
    // document.createElement("button");
    // document.getElementById("b").textContent = currentQuestion.b
    // document.createElement("button")
    // document.getElementById("c").textContent = currentQuestion.c
    // document.createElement("button");
    // document.getElementById("d").textContent = currentQuestion.d
//create a separate onclick that changes the current question to something else
//create a next question button that will go on to the next question and save your answer
   console.log("hello") 
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
