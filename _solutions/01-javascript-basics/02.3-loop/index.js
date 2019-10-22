var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var textToDecrypt = "7 - 0 - 11 - 11 - 14 - . -   - 8 - 2 - 7 -   - 22 - 20 - 4 - 13 - 18 - 2 - 7 - 4 -   - 4 - 8 - 13 - 4 - 13 -   - 18 - 2 - 7 - 14 - 4 - 13 - 4 - 13 -   - 19 - 0 - 6 - . - ";

var input = textToDecrypt.split(' - ');
var output = "";


for (var i=0; i< input.length; i++) {
    var index = parseInt(input[i]);
    if (isNaN(index) == false && index < key.length) {
        output += key[index];
    } else {
        output += input[i];
    }
}

document.getElementById("output").innerHTML = output;