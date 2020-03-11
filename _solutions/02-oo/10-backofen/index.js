class Backofen {
    constructor(maxTemperature) {
        this.maxTemperature = maxTemperature;
        this._currentTemperature = 0;
    }
    switchOn(temperatur) {
        console.log(`Backofen einschalten. Temperatur ${temperatur}`)
        if (temperatur > this.maxTemperature) {
            temperatur = this.maxTemperature;
        }
        this._currentTemperature = temperatur;
    }
    switchOff() {
        console.log(`Backofen ausschalten`);
        this._currentTemperature = 0;
    }
    getTemperature() {
        return this._currentTemperature;
    }
}


let myBackofen = new Backofen(220);
myBackofen.switchOn(300);
console.log(`Aktuelle Temperatur ist: ${myBackofen.getTemperature()}`);
myBackofen.switchOff();