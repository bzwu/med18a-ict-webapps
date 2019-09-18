var koerpergewicht = 84;
var koerpergroesse = 1.87;

var bmi = koerpergewicht / (koerpergroesse * koerpergroesse);

if (bmi < 20) {
    console.log("Untergewicht");
}
if (bmi > 20 && bmi < 25) {
    console.log("Normalgewicht");
}
if (bmi > 25) {
    console.log("Übergewicht");
}