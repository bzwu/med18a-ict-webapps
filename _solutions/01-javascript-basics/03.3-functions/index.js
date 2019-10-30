function createSalutation(name) {
    return "Guten Tag, " + name + "!";
}
function printText(text) {
    console.log(text);
}

var names = ["Tom", "Jane", "Tim", "Jenny"];

for (var i=0; i<names.length; i++) {
    var salution = createSalutation(names[i]);
    printText(salution);
}