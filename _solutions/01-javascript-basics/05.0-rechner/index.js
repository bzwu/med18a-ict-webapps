
function subtract() {
    calculate("Minus");
}
function add() {
    calculate("Plus");
}
function divide() {
    calculate("GeteiltDurch");
}
function multiply() {
    calculate("Multiplikation");
}

function calculate(operation) {
    var zahl1Text = document.getElementById('inputNumber1').value;
    var zahl1 = parseInt(zahl1Text);
    console.log(zahl1);
    var zahl2Text = document.getElementById('inputNumber2').value;
    var zahl2 = parseInt(zahl2Text);
    console.log(zahl2);
    var ergebnis = 0;
    if (operation == "Plus") {
        ergebnis = zahl1 + zahl2;
    }
    if (operation == "Minus") {
        ergebnis = zahl1 - zahl2;
    }
    if (operation == "GeteiltDurch") {
        ergebnis = zahl1 / zahl2;
    }
    if (operation == "Multiplikation") {
        ergebnis = zahl1 * zahl2;
    }
    console.log(ergebnis);
    document.getElementById('result').value = ergebnis;
}

document.getElementById('btn-subtract').onclick = subtract;
document.getElementById('btn-add').onclick = add;
document.getElementById('btn-divide').onclick = divide;
document.getElementById('btn-multiply').onclick = multiply; 