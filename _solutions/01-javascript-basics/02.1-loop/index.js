var output = '';

var character = '°';
var nofRows = 7;
var newLine = '<' + 'br/>';

for (var i=1; i <= nofRows; i++) {
    var rowOutput = '';
    for (var currentColumn=0; currentColumn < i; currentColumn++) {
        rowOutput += character;
    }
    output += rowOutput + newLine;
}

document.getElementById("output").innerHTML = output;
