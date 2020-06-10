export class UiLayer {

    constructor() {
        let searchBox = document.getElementById('pizza-search-box');
        searchBox.onkeyup = () => {
            for (let i=0; i<this.__pizzaSearchCallbacks.length; i++) {
                this.__pizzaSearchCallbacks[i](searchBox.value);
            }
        }
        let addingHistoryBtn = document.getElementById('adding-history-entry-btn');
        addingHistoryBtn.onclick = () => {
            this.showAddHistoryEntryForm();
        }
        let submitHistoryEntryBtn = document.getElementById('submit-history-entry-btn');
        submitHistoryEntryBtn.onclick = () => {
            this.submitHistoryEntryForm();
        }        
    }

    showAddHistoryEntryForm() {
        if (this.pizzaDetails) {
            document.getElementById('transparent-background').classList.add('visible');
            document.getElementById('add-history-entry-container').classList.add('visible');
        }
    }
    
    submitHistoryEntryForm() {
        if (this.pizzaDetails) {
            let anzahl = parseInt(document.getElementById('new-history-entry-anzahl').value);
            let bemerkung = document.getElementById('new-history-entry-comment').value;
            document.getElementById('new-history-entry-anzahl').value = '';
            document.getElementById('new-history-entry-comment').value = '';
            for (let i=0; i<this.__submitHistoryEntryCallbacks.length; i++) {
                this.__submitHistoryEntryCallbacks[i](this.pizzaDetails.pizza, anzahl, bemerkung);
            }
            document.getElementById('transparent-background').classList.remove('visible');
            document.getElementById('add-history-entry-container').classList.remove('visible');
        }
    }

    updatePizzaList(pizzas) {
        let table = document.getElementById('pizza-list');
        table.classList.remove('loaded');
        let body = table.getElementsByTagName('tbody')[0];
        body.innerHTML = '';
        for (let i=0; i<pizzas.length; i++) {
            let pizza = pizzas[i];
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerText = `${pizza.name} (CHF ${pizza.preis}.00)`;
            td1.onclick = () => {
                for (let i=0; i<this.__pizzaClickedCallbacks.length; i++) {
                    this.__pizzaClickedCallbacks[i](pizza);
                }
                let allRows = body.getElementsByTagName('tr');
                for (let i=0; i<allRows.length; i++) {
                    allRows[i].classList.remove('selected');
                }
                tr.classList.add('selected');
            }
            tr.appendChild(td1);
            body.appendChild(tr);
        }
        table.classList.add('loaded');
    }

    setPizzaDetails(pizzaDetails) {
        this.pizzaDetails = pizzaDetails;

        let contentArea = document.getElementById('content-area');
        contentArea.classList.add('has-selected-pizza');
        let title = document.getElementById('pizza-details-title');
        title.innerText = pizzaDetails.pizza.name;

        let zutatenContainer = document.getElementById('pizza-details-zutaten');
        zutatenContainer.innerHTML = '';
        for (let i=0; i<pizzaDetails.zutaten.length; i++) {
            let zutat = pizzaDetails.zutaten[i];
            let zutatElem = document.createElement('button');
            zutatElem.type = 'button';
            zutatElem.classList.add('btn');
            zutatElem.classList.add('btn-outline-secondary');
            zutatElem.innerText = zutat.name;
            zutatenContainer.appendChild(zutatElem);
        }

        let historyContainer = document.getElementById('pizza-details-history');
        historyContainer.innerHTML = '';
        if (pizzaDetails.history.length == 0) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.setAttribute('colspan', '3');
            td.innerText = "Keine verkauften Einheiten vorhanden.";
            tr.appendChild(td);
            historyContainer.appendChild(tr);
        }
        for (let i=0; i<pizzaDetails.history.length; i++) {
            let historyItem = pizzaDetails.history[i];
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerText = historyItem.anzahl;
            tr.appendChild(td);
            td = document.createElement('td');
            let datum = new Date(historyItem.datum);
            td.innerText = datum.toLocaleDateString() + " - " + datum.toLocaleTimeString();
            tr.appendChild(td);
            td = document.createElement('td');
            td.innerText = historyItem.bemerkung;
            tr.appendChild(td);
            historyContainer.appendChild(tr);
        }
    }

    __pizzaSearchCallbacks = [];
    registerOnPizzaSearchUpdate(callback) {
        this.__pizzaSearchCallbacks.push(callback);
    }
    __pizzaClickedCallbacks = [];
    registerOnPizzaClicked(callback) {
        this.__pizzaClickedCallbacks.push(callback);
    }
    __submitHistoryEntryCallbacks = [];
    registerOnSubmitHistoryEntry(callback) {
        this.__submitHistoryEntryCallbacks.push(callback);
    }
}