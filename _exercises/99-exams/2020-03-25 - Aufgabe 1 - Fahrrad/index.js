class Fahrrad {
    constructor(eingestellterGang) {
        this.aktuellerGang = 0;
        this.schalten(eingestellterGang);
    }

    schalten(anzahlGaenge) {
        this.aktuellerGang = this.aktuellerGang + anzahlGaenge;
        return this.aktuellerGang;
    }
}

var gang = 5;
var meinVelo = new Fahrrad(gang);

gang = meinVelo.schalten(+2);
console.log(gang);
gang = meinVelo.schalten(-3);
console.log(gang);