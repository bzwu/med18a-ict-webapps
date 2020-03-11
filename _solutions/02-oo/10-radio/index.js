class Radio {
    constructor(maxLaustaerkePegel) {
        this._maxLaustaerkePegel = maxLaustaerkePegel;
        this._istEingeschaltet = false;
        this._aktuelleLautstaerke = parseInt(maxLaustaerkePegel / 2);
    }
    einschalten() {
        this._istEingeschaltet = true;
    }
    ausschalten() {
        this._istEingeschaltet = false;
    }
    lauter() {
        let neueLautstaerke = this._aktuelleLautstaerke + 1;
        if (this._istEingeschaltet == true && neueLautstaerke <= this._maxLaustaerkePegel) {
            console.log("Lauter stellen");
            this._aktuelleLautstaerke = neueLautstaerke;
        }
    }
    leiser() {
        let neueLautstaerke = this._aktuelleLautstaerke - 1;
        if (this._istEingeschaltet == true && neueLautstaerke >= 0) {
            console.log("Leiser stellen");
            this._aktuelleLautstaerke = neueLautstaerke;
        }
    }
    getLautstaerke() {
        return this._aktuelleLautstaerke;
    }
    
}

let myRadio = new Radio(20);
console.log(`Aktuelle Lautstärke nach einschalten: ${myRadio.getLautstaerke()}`);
myRadio.einschalten();
for (let i=0; i<20; i++) {
    myRadio.lauter();
}
console.log(`Aktuelle Lautstärke nach lauter stellen: ${myRadio.getLautstaerke()}`);
for (let i=0; i<8; i++) {
    myRadio.leiser();
}
console.log(`Aktuelle Lautstärke nach leiser stellen: ${myRadio.getLautstaerke()}`);
myRadio.ausschalten();
myRadio.leiser();
console.log(`Aktuelle Lautstärke nach leiser stellen in abgeschaltetem Zustand: ${myRadio.getLautstaerke()}`);
myRadio.einschalten();
console.log(`Aktuelle Lautstärke nach erneutem Einschalten: ${myRadio.getLautstaerke()}`);