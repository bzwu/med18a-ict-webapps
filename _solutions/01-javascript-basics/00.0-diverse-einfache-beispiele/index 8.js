var erlaubteGeschwindigkeit = 80;
var tatsaechlicheGeschwindigkeit = 84;

if (erlaubteGeschwindigkeit < tatsaechlicheGeschwindigkeit) {
    var diff = tatsaechlicheGeschwindigkeit - erlaubteGeschwindigkeit;
    console.log("Achtung, Sie fahren " + diff + "km/h zu schnell!")
} else {
    console.log("Aktuelles Tempo OK");
}