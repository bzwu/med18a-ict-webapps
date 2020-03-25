let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');

btnStart.onclick = function() {
    btnStart.disabled = "disabled";
    btnStop.disabled = undefined;
}
btnStop.onclick = function() {
    btnStart.disabled = undefined;
    btnStop.disabled = "disabled";
}