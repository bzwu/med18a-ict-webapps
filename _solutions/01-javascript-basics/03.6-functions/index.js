function multiply(number) {
    var result = number * number;
    console.log("Die Quadratzahl von " + number + " ist: " + result);
}

function printText(number) {
    if (number > 5) {
        console.log("Die Zahl ist grösser als 5");
    } else {
        console.log("Die Zahl ist kleiner oder gleich 5");
    }
}

function repeatAction(numberOfExectutions, action) {
    for (var i=0; i<numberOfExectutions; i++) {
        action(i);
    }
}

repeatAction(4, multiply);
repeatAction(7, printText);