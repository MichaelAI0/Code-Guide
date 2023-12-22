const gameBoard = document.getElementById("game-board");
let currentPlayer = "X";

// Create game board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.addEventListener("click", handleCellClick, { once: true });
  gameBoard.appendChild(cell);
}

function handleCellClick(event) {
  event.target.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
