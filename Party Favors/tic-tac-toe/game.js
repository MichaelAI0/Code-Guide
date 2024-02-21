const gameBoard = document.getElementById("game-board");
const modeText = document.getElementById("mode");
let currentPlayer = "X";
let isTwoPlayer = true;

document.getElementById("togBtn").addEventListener("change", function (event) {
  isTwoPlayer = !event.target.checked;
  modeText.textContent = isTwoPlayer ? "Two Player Mode" : "One Player Mode";
});

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.addEventListener("click", handleCellClick, { once: true });
  gameBoard.appendChild(cell);
}

function handleCellClick(event) {
  event.target.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  if (checkWin()) {
    resetGame();
  } else if (!isTwoPlayer && currentPlayer === "O") {
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
    if (checkWin()) {
      resetGame();
    }
  }
}

function resetGame() {
  currentPlayer = "X";
  for (let cell of gameBoard.children) {
    cell.textContent = "";
    cell.addEventListener("click", handleCellClick, { once: true });
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const cells = Array.from(gameBoard.children);
  for (let combination of winningCombinations) {
    if (
      cells[combination[0]].textContent &&
      cells[combination[0]].textContent === cells[combination[1]].textContent &&
      cells[combination[1]].textContent === cells[combination[2]].textContent
    ) {
      return true;
    }
  }

  return false;
}
