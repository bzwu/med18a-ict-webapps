import { Person } from './person.js';

let person1 = new Person("Tom", 22, "männlich");
let person2 = new Person("Eva", 19, "weiblich");

document.getElementById("result-text").value = "1. Person: " + person1.name + " / 2. Person: " + person2.name;
