var verbrauchInLiterPro100km = 6.5;
var restmengeImTankInLiter = 23;
var geplanteStreckeInKm = 400;

var maximalMoeglicheStreckeInKm = restmengeImTankInLiter / verbrauchInLiterPro100km * 100;

console.log("Max. Strecke: " + maximalMoeglicheStreckeInKm + "km / geplante Strecke: " + geplanteStreckeInKm + "km");
if (maximalMoeglicheStreckeInKm >= geplanteStreckeInKm) {
    console.log("Genug im Tank");
} else {
    console.log("Unbedingt vor der Fahrt tanken");
}