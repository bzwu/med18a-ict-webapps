var einwohnerzahlen = [10000, 20000, 15000, 12000, 18000, 9000, 11000];

var totalEinwohner = 0;
for (var i=0; i < einwohnerzahlen.length; i++) {
    totalEinwohner = totalEinwohner + einwohnerzahlen[i];
}

var durchschnitt = totalEinwohner / einwohnerzahlen.length;

console.log("Durchschnittliche Anzahl Einwohner pro Stadt: " + durchschnitt);