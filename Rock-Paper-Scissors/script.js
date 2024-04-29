// cache the dom, which means storing the elements in memory

// global variables
let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultP = document.querySelector(".result > p");

// choices divs
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  switch (letter) {
    case "r":
      return "Rock";
    case "p":
      return "Paper";
    case "s":
      return "Scissors";
  }
}

function wins(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;

  resultP.textContent = ` ${convertToWord(userChoice)} beats  
    ${convertToWord(computerChoice)}. You win! `;

  userChoiceDiv.classList.add("green-glow");

  setTimeout(() => {
    userChoiceDiv.classList.remove("green-glow");
  }, 900);
}

function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  userScoreSpan.textContent = userScore;
  computerScoreSpan.textContent = computerScore;
  // console.log(userChoice);
  // console.log(computerChoice);
  resultP.textContent = ` ${convertToWord(userChoice)} loses to  
  ${convertToWord(computerChoice)}. You lost... `;
  userChoiceDiv.classList.add("red-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("red-glow");
  }, 900);
}

function tie(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  resultP.textContent = ` ${convertToWord(userChoice)} equals 
  ${convertToWord(computerChoice)}. Its a tie! `;
  userChoiceDiv.classList.add("gray-glow");
  setTimeout(() => {
    userChoiceDiv.classList.remove("gray-glow");
  }, 900);
}

function game(userChoice) {
  // first see if we can get a user choice
  // console.log("user choice: " + userChoice);
  const computerChoice = getComputerChoice();
  // console.log("user choice: " + userChoice);
  // console.log("computer choice: " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      wins(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      break;
  }
}

function main() {
  // event listeners
  rockDiv.addEventListener("click", () => {
    game("r");
    // console.log("user clicked rock");
  });
  paperDiv.addEventListener("click", () => {
    game("p");
    // console.log("user clicked paper");
  });
  scissorsDiv.addEventListener("click", () => {
    game("s");
    // console.log("user clicked scissors");
  });
}

main();
