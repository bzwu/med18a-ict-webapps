import { Person } from './person.js';

let birthday = new Date(1999, 8, 12);
let sylvia = new Person("Sylvia", birthday, "weiblich");
document.getElementById("result-text").value = sylvia.sayHello();