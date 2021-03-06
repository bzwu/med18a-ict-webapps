function generiereLottoTip(anzahlZahlen, zahlenraum) {
    var generierteZahlen = [];

    for (var i=1; generierteZahlen.length < anzahlZahlen; i++) {
        var generierteZahl = Math.random() * zahlenraum;
        generierteZahl = Math.floor(generierteZahl) + 1;
        if (generierteZahlen.indexOf(generierteZahl) < 0) {
            generierteZahlen.push(generierteZahl);
        }
    }
    generierteZahlen.sort(function(a,b) {
        return a-b;
    });
    return generierteZahlen;
}


document.getElementById('btn').onclick = function() {
    var outputContainer = document.getElementById('output');
    outputContainer.innerText = '';
    var tip = generiereLottoTip(6, 45);
    for (var i=0; i<tip.length; i++) {
        var zahlDiv = document.createElement('div');
        zahlDiv.innerText = tip[i];
        outputContainer.appendChild(zahlDiv);
    }
}