var highScores = localStorage.getItem("highScores")
highScores = JSON.parse(highScores)

for(var i=0; i<highScores.length-1; i++){
    if (highScores!== null){
    var listScores = document.createElement("li");
    listScores.textContent = highScores[i].initials + " " + highScores[i].score

}
}
