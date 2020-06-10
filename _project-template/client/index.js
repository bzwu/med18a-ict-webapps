import { DataLayer } from './data-layer.js';
import { UiLayer } from './ui-layer.js';

let dataLayer = new DataLayer();
let uiLayer = new UiLayer();

function loadPizzas(searchText) {
    dataLayer.loadPizzas(searchText, function(pizzas) {
        uiLayer.updatePizzaList(pizzas);    
    });
}
function loadPizzaDetails(pizza) {
    dataLayer.loadPizzaDetails(pizza, function(details) {
        uiLayer.setPizzaDetails(details);
    });
}
function saveHistoryEntry(pizza, anzahl, bemerkung) {
    dataLayer.saveHistoryEntry(pizza, anzahl, bemerkung, function() {
        loadPizzaDetails(pizza);
    });
}

loadPizzas();
uiLayer.registerOnPizzaSearchUpdate(function(searchText) {
    loadPizzas(searchText);
})
uiLayer.registerOnPizzaClicked(function(pizza) {
    loadPizzaDetails(pizza);
})
uiLayer.registerOnSubmitHistoryEntry(function(pizza, anzahl, bemerkung) {
    saveHistoryEntry(pizza, anzahl, bemerkung);
})