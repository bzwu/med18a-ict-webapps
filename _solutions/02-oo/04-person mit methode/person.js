export class Person {
    constructor(name, ageInYears, gender) {
        this.name = name;
        this.age = ageInYears;
        this.gender = gender;
    }

    sayHello() {
        if (this.gender == "männlich") {
            return `Hallo, ich bin ein Mann, ${this.age} Jahre alt und heisse ${this.name}.`;
        }
        if (this.gender == "weiblich") {
            return `Hallo, ich bin eine Frau, ${this.age} Jahre alt und heisse ${this.name}.`;
        }
        return `Hallo, ich heisse ${this.name}, bin ${this.age} Jahre alt und weder Mann noch Frau.`;
    }
}


