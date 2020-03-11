class Haus {
    constructor(anzahlEinwohner) {
        this._einwohner = anzahlEinwohner;
    }
    einwohnerErhoehen(anzahlEinwohner) {
        this._einwohner = this._einwohner + anzahlEinwohner;
    }
    einwohnerReduzieren(anzahlEinwohner) {
        this._einwohner = this._einwohner - anzahlEinwohner;
    }
    anzahlEinwohner() {
        return this._einwohner;
    }
}

class Quartier {
    constructor(name) {
        this.name = name;
        this.haeuser = [];
    }
    hausHinzu(haus) {
        this.haeuser.push(haus);
    }
    anzahlEinwohner() {
        let einwohner = 0;
        for(let i=0; i<this.haeuser.length; i++) {
            einwohner = einwohner + this.haeuser[i].anzahlEinwohner();
        }
        return einwohner;
    }
}


let myQuartier = new Quartier("Chrüzacker");
let haus1 = new Haus(5);
myQuartier.hausHinzu(haus1);
let haus2 = new Haus(4);
myQuartier.hausHinzu(haus2);
haus2.einwohnerErhoehen(2);
let anzahlQuartierbewohner = myQuartier.anzahlEinwohner();
console.log(anzahlQuartierbewohner);