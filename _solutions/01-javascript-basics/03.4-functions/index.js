function getCurrentDateTime() {
    var now = new Date(); 
    var time = now.toLocaleTimeString(); 
    var date = now.toLocaleDateString();
    return date + " - " + time;
}
function createSalutation(name) {
    var now = getCurrentDateTime();
    return now + ": Guten Tag, " + name + "!";
}
function printText(text) {
    console.log(text);
}

var names = ["Tom", "Jane", "Tim", "Jenny"];

for (var i=0; i<names.length; i++) {
    var salution = createSalutation(names[i]);
    printText(salution);
}