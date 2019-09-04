var output = '';

var character = '°';
var nofRows = 7;
var anzahlAeste = 4;
var newLine = '<' + 'br/>';

for (var aktuellerAst = 0; aktuellerAst < anzahlAeste; aktuellerAst++) {
    for (var i=1; i <= nofRows; i++) {
        var rowOutput = '';
        for (var currentColumn=0; currentColumn < i; currentColumn++) {
            rowOutput += character;
        }
        output += rowOutput + newLine;
    }

    document.getElementById("output").innerHTML = output;
}
