class Kanton {
    constructor(staedte) {
        this.staedte = staedte;
    }

    getAnzahlStaedte() {
        return this.staedte.length;
    }

    getGroessteStadt() {
        let stadt = this.staedte[0];
        for (let i=0; i<this.staedte.length; i++) {
            if (this.staedte[i].einwohner > stadt.einwohner) {
                stadt = this.staedte[i];
            }
        }
        return stadt;
    }

    getAnzahlEinwohner() {
        let resultat = 0;
        for (let i=0; i<this.staedte.length; i++) {
            resultat = resultat + this.staedte[i].einwohner;
        }
        return resultat;
    }

    istStadtEnthalten(stadt) {
        let resultat = false;
        for (let i=0; i<this.staedte.length; i++) {
            if (this.staedte[i].name == stadt.name) {
                resultat = true;
            }
        }
        return resultat;
    }
}
class Stadt {
    constructor(bezeichnung, einwohner) {
        this.name = bezeichnung;
        this.einwohner = einwohner;
    }
}

let wil = new Stadt("Wil", 20000);
let gossau = new Stadt("Gossau", 15000);
let stgallen = new Stadt("St. Gallen", 85000);
let zurich = new Stadt("Zürich", 500000);
let staedte = [wil, gossau, stgallen];
let kantonsg = new Kanton(staedte);
console.log(kantonsg.getAnzahlStaedte());
console.log(kantonsg.getGroessteStadt());
console.log(kantonsg.getAnzahlEinwohner());
console.log(kantonsg.istStadtEnthalten(zurich));

