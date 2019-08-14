var greetingEn = "Welcome!"
var greetingDe = "Willkommen!"

var greeting = greetingEn;
if (navigator.language.indexOf("de") >= 0) {
    greeting = greetingDe;
}
document.getElementById('result').innerHTML = greeting;
