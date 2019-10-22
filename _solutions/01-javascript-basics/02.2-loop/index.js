var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var textToEncrypt = "Hallo. Ich wuensche einen schoenen Tag.";

var input = textToEncrypt.toUpperCase();

var output = "";

for (var i=0; i< input.length; i++) {
    var found = false;
    for (var j=0; j<key.length; j++) {
        if (key[j] == input[i]) {
            output += j;
            found = true;
        }
    }
    if (!found) {
        output += input[i];
    }
    output += ' - ';
}

document.getElementById("output").innerHTML = output;