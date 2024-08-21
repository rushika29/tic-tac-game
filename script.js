let gameBoard = [];
let score = 0;
let currentPlayer = "X";

// Initialize game board
for (let i = 1; i <= 9; i++) {
    gameBoard.push({ id: `cell-${i}`, value: "" });
}

// Add event listeners to cells
gameBoard.forEach((cell) => {
    document.getElementById(cell.id).addEventListener("click", () => {
        if (cell.value === "") {
            cell.value = currentPlayer;
            document.getElementById(cell.id).innerHTML = currentPlayer;
            checkWin();
            switchPlayer();
        }
    });
});

// Check for win
function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        if (
            gameBoard[condition[0]].value === currentPlayer &&
            gameBoard[condition[1]].value === currentPlayer &&
            gameBoard[condition[2]].value === currentPlayer
        ) {
            alert(`Player ${currentPlayer} wins!`);
            score++;
            document.getElementById("score").innerHTML = score;
            resetGame();
        }
    }
}

// Switch player
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Reset game
function resetGame() {
    gameBoard.forEach((cell) => {
        cell.value = "";
        document.getElementById(cell.id).innerHTML = "";
    });
    currentPlayer = "X";
}

// Add event listener to new game button
document.getElementById("new-game").addEventListener("click", resetGame);

// Add event listener to reset score button
document.getElementById("reset-score").addEventListener("click", () => {
    score = 0;
    document.getElementById("score").innerHTML = score;
});