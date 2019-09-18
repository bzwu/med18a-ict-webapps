var zeugnisnoten = [4.6, 5.0, 5.9, 3.4, 5.1, 4.3];

var summeNoten = 0;
for (var i=0; i<zeugnisnoten.length; i++) {
    summeNoten = summeNoten + zeugnisnoten[i];
}
var durchschnitt = summeNoten / zeugnisnoten.length;

console.log("Notendurchschnitt: " + durchschnitt);