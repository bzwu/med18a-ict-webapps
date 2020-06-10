import { http } from './http.js';

export class DataLayer {
    loadPizzas(searchText, callback) {
        let url = '/pizzas';
        if (searchText) {
            searchText = `${searchText}`;
            url += `?filter=${searchText}`;
        }
        http.get(url, function(response) {
            let pizzas = JSON.parse(response);
            console.log("Loaded Pizzas:");
            console.log(pizzas);
            callback(pizzas);
        })
    }
    loadPizzaDetails(pizza, callback) {
        let url = `/pizzas/${pizza.id}`;
        http.get(url, function(response) {
            let details = JSON.parse(response);
            details.pizza = pizza;
            console.log("Pizza Details loaded:");
            console.log(details);
            callback(details);
        })
    }
    saveHistoryEntry(pizza, anzahl, bemerkung, callback) {
        let url = `/pizzas/${pizza.id}/history`;
        let data = {
            anzahl: anzahl,
            bemerkung: bemerkung
        }
        http.post(url, data, function() {
            callback();
        })
    }
}