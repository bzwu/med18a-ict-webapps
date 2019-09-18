var situationAussen = "hell"; // "hell" oder "dunkel"
var licht = "an"; // "an" oder "aus"


var ausgabe = "Keine Aktion nötig";
if (situationAussen == "dunkel" && licht == "aus") {
    ausgabe = "Licht wird eingeschaltet";
}
if (situationAussen == "hell" && licht == "an") {
    ausgabe = "Licht wird ausgeschaltet";
}
console.log(ausgabe);