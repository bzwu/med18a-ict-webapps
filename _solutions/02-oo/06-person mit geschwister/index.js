import { Male, Female } from './person.js';

let sylvia = new Female("Sylvia", new Date(1986, 5, 12));
let peter = new Male("Peter", new Date(2002, 7, 4));
peter.addSibling(sylvia);

let geschwisterVonSylvia = sylvia.getSiblings();
document.getElementById("result-text").value = `Ein Geschwister von ${sylvia.name} heisst ${geschwisterVonSylvia[0].name}`;