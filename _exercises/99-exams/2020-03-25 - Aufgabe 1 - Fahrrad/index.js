class Fahrrad {
    constructor(anzahlGaenge, eingestellterGang) {
        this.aktuellerGang = 0;
        this.anzahlGaenge = anzahlGaenge;
        this.schalten(eingestellterGang);
    }

    schalten(anzahlGaenge) {
        var neuerGang = this.aktuellerGang + anzahlGaenge;
        if (neuerGang > this.anzahlGaenge) {
            neuerGang = this.anzahlGaenge;
        }
        if (neuerGang < 1) {
            neuerGang = 1;
        }
        this.aktuellerGang = neuerGang;
        return this.aktuellerGang;
    }
}

var gang = 5;
var meinVelo = new Fahrrad(24, gang);

gang = meinVelo.schalten(+2);
console.log(gang);
gang = meinVelo.schalten(-3);
console.log(gang);