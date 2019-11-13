function generiereLottoTipp(anzahlZahlen, zahlenraum) {
    var resultat = [];
    for (var i=0; resultat.length < anzahlZahlen; i++) {
        var zahl = Math.random();
        zahl = zahl * zahlenraum;
        zahl = Math.floor(zahl) + 1;
        if (resultat.indexOf(zahl) == -1) {
            resultat.push(zahl);
        }
    }
    resultat.sort(vergleicheZweiZahlen);
    /*resultat.sort(function(zahl1, zahl2) {
        return zahl1 - zahl2;
    })*/
    return resultat;
}

function vergleicheZweiZahlen(zahl1, zahl2) {
    return zahl1 - zahl2;
}

var vergleicheZweiZahlen2 = function(zahl1, zahl2) {
    return zahl1 - zahl2;
}

var zahlenraum = 45;
var tipp = generiereLottoTipp(6, 45);
console.log(tipp.join(", "));

