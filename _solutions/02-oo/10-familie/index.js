class Person {
    constructor(name) {
        this.name = name;
    }
}

class Familie {
    constructor(vater, mutter) {
        this.vater = vater;
        this.mutter = mutter;
        this.kinder = [];
    }

    neuesKind(kind) {
        this.kinder.push(kind);
    }
}


let otto = new Person("Otto");
let frieda = new Person("Frieda");
let sylvia = new Person("Sylvia");
let thomas = new Person("Thomas");

let familieMeier = new Person(otto, frieda);
familieMeier.neuesKind(sylvia);
familieMeier.neuesKind(thomas);