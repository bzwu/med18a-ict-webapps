var words_de = ["Hallo", "Heute", "Morgen"];
var words_en = ["Hello", "Today", "Tomorrow"];

var wordToTranslate = "Morgen";

var translatedWord = "Keine Übersetzung gefunden.";
for (var i=0; i<words_de.length; i++) {
    if (words_de[i] == wordToTranslate) {
        translatedWord = words_en[i];
    }
}
console.log(wordToTranslate + ": " + translatedWord);