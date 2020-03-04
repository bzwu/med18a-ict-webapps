export class Person {
    constructor(name, birthdate, gender) {
        this.name = name;
        let currentDate = new Date();
        this.age = currentDate.getFullYear() - birthdate.getFullYear();
        this.gender = gender;
    }

    sayHello() {
        return `Hallo, ich heisse ${this.name} und bin ${this.age} Jahre alt.`;
    }
}


