import { Male, Female } from './person.js';

let person = new Female("Sylvia", new Date(1986, 5, 12));
console.log(person.age);
document.getElementById("result-text").value = person.sayHello();