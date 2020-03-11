class Land {
    constructor(name, anzahlBewohnerInMio) {
        this._name = name;
        this._anzahlBewohner = anzahlBewohnerInMio;
    }
    getAnzahlBewohner() {
        return this._anzahlBewohner;
    }
}

class Kontinent {
    constructor(name, laender) {
        this._name = name;
        this._laender = laender;
    }
    getAnzahlBewohner() {
        let anzahlBewohner = 0;
        for (let i=0; i<this._laender.length; i++) {
            anzahlBewohner += this._laender[i].getAnzahlBewohner();
        }
        return anzahlBewohner;
    }
}

class Erde {
    constructor(kontinente) {
        this._kontinente = kontinente;
    }
    getAnzahlBewohner() {
        let anzahlBewohner = 0;
        for (let i=0; i<this._kontinente.length; i++) {
            anzahlBewohner += this._kontinente[i].getAnzahlBewohner();
        }
        return anzahlBewohner;
    }
}

let germany = new Land("Deutschland", 80);
let switzerland = new Land("Schweiz", 8);
let france = new Land("Frankreich", 45);

let iran = new Land("Iran", 60);
let china = new Land("China", 1500);
let japan = new Land("Japan", 40);

let europe = new Kontinent("Europa", [germany, switzerland, france]);
let asia = new Kontinent("Asien", [iran, china, japan]);

let earth = new Erde([europe, asia]);
let bewohner = earth.getAnzahlBewohner();

console.log(`Anzahl Bewohner auf der Erde: ${bewohner} Mio.`);