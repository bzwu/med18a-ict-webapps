var player1 = 'X';
var player2 = 'O';


function tryGetWinner() {
    var allCells = document.getElementsByClassName('tic-tac-toe-cell');
    var allValues = [];
    for (var i=0; i<allCells.length; i++) {
        allValues.push(allCells[i].innerText);
        allValues[i] = allValues[i] == player1 || allValues[i] == player2 ? allValues[i]: '';
    }
    var winner = null;
    for (var i=0; i<3; i++) {
        if (allValues[i*3] && allValues[i*3] == allValues[i*3 + 1] && allValues[i*3] == allValues[i*3 + 2]) {
            winner = allValues[i*3];
        }
        if (allValues[i] && allValues[i] == allValues[i + 3] && allValues[i] == allValues[i + 6]) {
            winner = allValues[i];
        }
    }
    if (allValues[0] && allValues[0] == allValues[4] && allValues[0] == allValues[8]) {
        winner = allValues[0];
    }
    if (allValues[2] && allValues[2] == allValues[4] && allValues[2] == allValues[6]) {
        winner = allValues[2];
    }
    return winner;
}