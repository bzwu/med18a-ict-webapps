class Kanton {
    constructor(staedte) {
        this.staedte = staedte;
    }

    aktion1() {
        return this.staedte.length;
    }

    aktion2() {
        let stadt = this.staedte[0];
        for (let i=0; i<this.staedte.length; i++) {
            if (this.staedte[i].einwohner > stadt.einwohner) {
                stadt = this.staedte[i];
            }
        }
        return stadt;
    }

    aktion3() {
        let resultat = 0;
        for (let i=0; i<this.staedte.length; i++) {
            resultat = resultat + this.staedte[i].einwohner;
        }
        return resultat;
    }

    aktion4(stadt) {
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
console.log(kantonsg.aktion1());
console.log(kantonsg.aktion2());
console.log(kantonsg.aktion3());
console.log(kantonsg.aktion4(zurich));

