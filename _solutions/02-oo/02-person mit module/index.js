import { Person } from './person.js';

let person1 = new Person();
person1.name = "Tom";
person1.age = 22;
person1.gender = "männlich";

let person2 = new Person();
person2.name = "Eva";
person2.age = 19;
person2.gender = "weiblich";

var diff = Math.sqrt(Math.pow(person2.age - person1.age, 2))

document.getElementById("result-text").value = "Der Altersunterschied von " + person1.name + " und " + person2.name + " beträgt " + diff + " Jahre.";