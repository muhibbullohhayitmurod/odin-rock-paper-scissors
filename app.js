let humanScore = 0,
  computerScore = 0;

// A function to get a random choice from the computer without using arrays
function generateRandNum(a = 0, b = 2) {
  const rand = Math.floor(Math.random() * (b - a + 1)) + a;
  return rand;
}

function getComputerChoice() {
  let computerChoice;
  // first we'll generate a random number between 0-2
  const randNum = generateRandNum(0, 2);
  if (randNum === 0) computerChoice = "rock";
  if (randNum === 1) computerChoice = "paper";
  if (randNum === 2) computerChoice = "scissors";
  return computerChoice;
}

function getUserChoice() {
  const userChoice = prompt("Rock, paper, scissors? ");
  return userChoice.toLowerCase();
}


const userChoiceTxt = document.querySelector(".user-choice-txt");
const computerChoiceTxt = document.querySelector(".computer-choice-txt");
const roundWinnerTxt = document.querySelector(".round-winner-txt");
function playRound(humanChoice, computerChoice) {
  let winner;
  if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    winner = "Computer";
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    winner = "Computer";
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    winner = "Computer";
  } else if (computerChoice === humanChoice) {
    winner = "";
  } else {
    winner = "User";
    humanScore++;
  }
  userChoiceTxt.textContent = `You chose: ${humanChoice}.`;
  computerChoiceTxt.textContent = `Computer chose: ${computerChoice}.`;
  roundWinnerTxt.textContent = winner ? `This round ${winner} wins!` : "It's a tie!";
}

const userScoreTxt = document.querySelector(".user-score");
const computerScoreTxt = document.querySelector(".computer-score");

// helper functions

function updateScores() {
  userScoreTxt.textContent = `${humanScore}`;
  computerScoreTxt.textContent = `${computerScore}`;
}


const winnerTxt = document.querySelector(".winner-msg");
function checkWinner() {
  if (humanScore >= 5 || computerScore >= 5) {
    let msg =
      humanScore > computerScore ? "You win!" : "You lost, computer wins!";
    msg += ` (${humanScore}:${computerScore})`;
    winnerTxt.textContent = msg;
    humanScore = 0;
    computerScore = 0;
    msg = '';
    
    userChoiceTxt.textContent = "";;
    computerChoiceTxt.textContent = "";
    roundWinnerTxt.textContent = "";
  }
}

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    const humanChoice = btn.dataset.choice;
    playRound(humanChoice, computerChoice);
    checkWinner();
    updateScores();
  });
});
