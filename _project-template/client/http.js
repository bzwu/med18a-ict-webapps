var rootUrl = 'http://localhost:3006'
export var http = {
    get: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', rootUrl + url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            }
            else {
                throw xhr.status + ': ' +  xhr.statusText;
            }
        };
        xhr.send();
    },
    post: function(url, data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', rootUrl + url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            if (xhr.status === 201) {
                callback(xhr.responseText);
            }
            else {
                throw xhr.status + ': ' +  xhr.statusText;
            }
        };
        xhr.send(JSON.stringify(data));
    }
}