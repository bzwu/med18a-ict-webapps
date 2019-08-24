var randomNumber = Math.random();

var outputText = "Zahl ist in einem Zwischenbereich";
if (randomNumber >= 0.4 && randomNumber <= 0.6) {
    outputText = "Zahl ist im mittleren Bereich";
}
if (randomNumber < 0.1 || randomNumber > 0.9) {
    outputText = "Zahl ist im Randbereich";
}

outputText = randomNumber + ": " + outputText;
document.getElementById("result").innerHTML = outputText;