//so I went and selected for the html element
var list = document.querySelector(".listofscores")
//then i pulled the scored out of local storage
var highScores = localStorage.getItem("highScores")
highScores = JSON.parse(highScores)
//then I had to create elements on the page otherwise they wouldn't show up
//The only problem I'm having right now is that the last score is missing
if (highScores !== null) {
for (var i = 0; i < highScores.length - 1; i++) {
    
        var listScores = document.createElement("li");
        listScores.textContent = highScores[i].initials + " " + highScores[i].score
        list.appendChild(listScores)

    }
}
