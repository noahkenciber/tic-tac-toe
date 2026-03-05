const boardElement = document.querySelectorAll('.cell');
const statusElement = document.getElementById('status');
const restartBtn = document.getElementById('restart');
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

function handleCellClick(e) {
    const clickedCell = e.target;
    const index = clickedCell.getAttribute('data-index');
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    clickedCell.setAttribute('data-player', currentPlayer);

    checkResult();
}

function checkResult() {
    let roundWon = false;
    let winCondition = null;

    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            winCondition = condition;
            break;
        }
    }

    if (roundWon) {
        statusElement.innerText = `JOGADOR ${currentPlayer} VENCEU! 🎉`;
        gameActive = false;

        winCondition.forEach(index => {
            boardElement[index].classList.add('winner');
        });
        return;
    }

    if (!board.includes("")) {
        statusElement.innerText = "EMPATE! 🤝";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusElement.innerText = `Vez do Jogador ${currentPlayer}`;
}

restartBtn.addEventListener('click', () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusElement.innerText = "Vez do Jogador X";
    boardElement.forEach(cell => {
        cell.innerText = "";
        cell.removeAttribute('data-player');
        cell.classList.remove('winner');
    });
});

boardElement.forEach(cell => cell.addEventListener('click', handleCellClick));
