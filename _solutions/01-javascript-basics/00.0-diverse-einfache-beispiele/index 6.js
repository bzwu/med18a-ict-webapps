var aktuellerTag = "Donnerstag";

var anweisung = "Fahren Sie zur Arbeit";

if (aktuellerTag == "Dienstag" || aktuellerTag == "Mittwoch") {
    anweisung = "Fahren Sie in die Schule";
}
if (aktuellerTag == "Samstag" || aktuellerTag == "Sonntag") {
    anweisung = "Sie haben heute frei!";
}

console.log(aktuellerTag + ": " + anweisung);