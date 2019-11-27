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
    var tip = generiereLottoTip(6, 45);
    document.getElementById('output').innerText = tip;
}