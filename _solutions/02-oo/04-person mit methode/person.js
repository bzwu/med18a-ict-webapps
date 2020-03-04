export class Person {
    constructor(name, ageInYears, gender) {
        this.name = name;
        this.age = ageInYears;
        this.gender = gender;
    }

    sayHello() {
        return `Hallo, ich heisse ${this.name} und bin ${this.age} Jahre alt.`;
    }
}


