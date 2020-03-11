class Reservoir {
    constructor(maxFassungsvermoegen) {
        this._maxFassungsvermoegen = maxFassungsvermoegen;
        this._aktuellerFuellstand = 0;
    }
    wasserEinlaufen(anzahlLiter) {
        this.aendereWassermenge(anzahlLiter);
    }
    wasserAuslaufen(anzahlLiter) {
        this.aendereWassermenge(0 - anzahlLiter);
    }
    aendereWassermenge(anzahlLiter) {
        let neuerFuellstand = this._aktuellerFuellstand + anzahlLiter;
        if (neuerFuellstand > this._maxFassungsvermoegen) {
            neuerFuellstand = this._maxFassungsvermoegen;
        }
        if (neuerFuellstand < 0) {
            neuerFuellstand = 0;
        }
        this._aktuellerFuellstand = neuerFuellstand;
    }
    getFuellstand() {
        return this._aktuellerFuellstand;
    }
}

let wasserReservoir = new Reservoir(1000);
wasserReservoir.wasserEinlaufen(1500);
wasserReservoir.wasserAuslaufen(200);
let fuellstand = wasserReservoir.getFuellstand();

console.log(`Aktueller Füllstand: ${fuellstand} Liter.`)