var http = {
    get: function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            }
            else {
                throw xhr.status + ': ' +  xhr.statusText;
            }
        };
        xhr.send();
    }
}

http.get('index.js', function(response) {
    var jsCode = document.getElementById('js-code');
    if (jsCode) {
        var output = '';
        var lines = response.split('\r\n')
        if (lines.length > 1) {
            for (var i in lines) {
                var lineNumber = parseInt(i)+1;
                var line = lineNumber.toString();
                line = (line.length < 2) ? '0' + line: line;
                line = line + '\t' + lines[i] + '\r\n';
                output += line;
            }
        } else {
            output = response;
        }
        output = output.replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
        jsCode.innerHTML = '\r\n' + output;
        hljs.highlightBlock(jsCode);
    }
});
hljs.initHighlightingOnLoad();

if (location.href.indexOf('/_solutions/') > 0) {
    var container = document.getElementsByTagName('div')[0]
    var solutionHint = document.createElement("div")
    solutionHint.classList.add('alert');
    solutionHint.classList.add('alert-warning');
    solutionHint.innerHTML = 'L&ouml;sung'
    container.insertBefore(solutionHint, container.firstChild)
}