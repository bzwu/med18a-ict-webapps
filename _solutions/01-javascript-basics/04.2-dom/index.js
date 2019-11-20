var nofClicks = 0;
document.getElementById('btn').onclick = function() {
    nofClicks++;
    alert("Sie haben nun bereits " + nofClicks + "mal auf den Button geklickt.");
}