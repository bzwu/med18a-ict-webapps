var shortGreetingEn = "Welcome!"
var shortGreetingDe = "Willkommen!"
var longGreetingEn = "Welcome! Nice to see you here!"
var longGreetingDe = "Willkommen! Schön, dass Sie hier sind."
var questionEn = "Would you like to be greeted in detail?"
var questionDe = "Möchten Sie ausführlich begrüsst werden?"

var shortGreeting = shortGreetingEn;
var longGreeting = longGreetingEn;
var question = questionEn;
if (navigator.language.indexOf("de") >= 0) {
    shortGreeting = shortGreetingDe;
    longGreeting = longGreetingDe;
    question = questionDe;
}
var greeting = shortGreeting;
var answer = confirm(question);
if (answer == true) {
    greeting = longGreeting;
} 
document.getElementById('result').innerHTML = greeting;


