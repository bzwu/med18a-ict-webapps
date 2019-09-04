var output = '';

var character = '°';
var anzahlAeste = 4;
var newLine = '<' + 'br/>';

function erstelleAst(groesse) {
    for (var i=1; i <= groesse; i++) {
        var rowOutput = '';
        for (var currentColumn=0; currentColumn < i; currentColumn++) {
            rowOutput += character;
        }
        output += rowOutput + newLine;
    }
}

for (var aktuellerAst = 0; aktuellerAst < anzahlAeste; aktuellerAst++) {
    erstelleAst(4 + 2*aktuellerAst);
}
document.getElementById("output").innerHTML = output;