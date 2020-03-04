class Person {
    constructor(name, birthdate) {
        this.name = name;
        let currentDate = new Date();
        this.age = currentDate.getFullYear() - birthdate.getFullYear();
    }

    sayHello() {
        return `Hallo, ich heisse ${this.name}, bin ${this.age} Jahre alt und weder Mann noch Frau.`;
    }
}

export class Male extends Person {
    constructor(name, birthdate) {
        super(name, birthdate);
    }

    sayHello() {
        return `Hallo, ich bin ein Mann, ${this.age} Jahre alt und heisse ${this.name}.`;
    }
}

export class Female extends Person {
    constructor(name, birthdate) {
        super(name, birthdate);
    }

    sayHello() {
        return `Hallo, ich bin eine Frau, ${this.age} Jahre alt und heisse ${this.name}.`;
    }
}
