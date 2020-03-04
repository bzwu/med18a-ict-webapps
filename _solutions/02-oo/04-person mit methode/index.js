import { Person } from './person.js';

let sylvia = new Person("Sylvia", 19, "weiblich");
document.getElementById("result-text").value = sylvia.sayHello();