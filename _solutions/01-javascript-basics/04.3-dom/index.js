var nofClicks = 0;

function outputText(text) {
    var outputField = document.getElementById('msg-box');
    outputField.innerText = text;
}
document.getElementById('btn').onclick = function() {
    nofClicks++;
    outputText("Sie haben nun bereits " + nofClicks + "mal auf den Button geklickt.");
}
document.getElementById('btn-reset').onclick = function() {
    nofClicks = 0;
    outputText("-");
}