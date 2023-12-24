const gameBoard = document.getElementById("game-board");
const modeText = document.getElementById("mode");
let currentPlayer = "X";
let isTwoPlayer = true;

document.getElementById("togBtn").addEventListener("change", function (event) {
  isTwoPlayer = !event.target.checked;
  modeText.textContent = isTwoPlayer ? "Two Player Mode" : "One Player Mode";
});

// Create game board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.addEventListener("click", handleCellClick, { once: true });
  gameBoard.appendChild(cell);
}

function handleCellClick(event) {
  event.target.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (!isTwoPlayer && currentPlayer === "O") {
    makeAIMove();
  }
}

function makeAIMove() {
  let availableCells = Array.from(gameBoard.children).filter(
    (cell) => !cell.textContent
  );
  if (availableCells.length) {
    let randomCell =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    randomCell.textContent = "O";
    currentPlayer = "X";
  }
}
