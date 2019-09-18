var tempoTimInKmh = 20;
var pauseTimInMin = 0;
var tempoTomInKmh = 30;
var pauseTomInMin = 10;

var streckeInKm = 12;

var dauerFahrtTim = streckeInKm / tempoTimInKmh + pauseTimInMin / 60;
var dauerFahrtTom = streckeInKm / tempoTomInKmh + pauseTomInMin / 60;

if (dauerFahrtTim == dauerFahrtTom) {
    console.log("Tim und Tom sind zur gleichen Zeit am Ziel");
} else {
    if (dauerFahrtTim > dauerFahrtTom) {
        console.log("Tom ist schneller");
    } else {
        console.log("Tim ist schneller");
    }
}