var output = '';

var row = '°°°';
var nofRows = 7;
var newLine = '\r\n'; // oder: '<' + 'br/>';

for (var i=0; i < nofRows; i++) {
    output = output + row + newLine;
}

document.getElementById("output").innerHTML = output;
