function hide() {
    this.style.visibility = 'hidden';
}

function makeRed() {
    this.style.background = 'red'
}

function makeGreen() {
    this.style.background = 'green'
}

var buttons = document.getElementsByClassName('colorButton')
for (var i=0; i<buttons.length; i++) {
    buttons[i].onclick = hide;
    buttons[i].onmouseover = makeRed;
    buttons[i].onmouseout = makeGreen;
}

document.getElementById('btn-showall').onclick = function() {
    for (var i=0; i<buttons.length; i++) {
        buttons[i].style.visibility = 'inherit';
    }
}