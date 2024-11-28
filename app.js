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
  console.log(`You chose: ${humanChoice}.`);
  console.log(`Computer chose: ${computerChoice}.`);
  console.log(winner ? `${winner} wins!` : "It's a tie!");
}

for (let i = 0; i < 5; i++) {
  console.log(`Round: ${i + 1}`);
  playRound(getUserChoice(), getComputerChoice());
  console.log(`Scores:\n\thuman: ${humanScore}\n\tcomputer: ${computerScore}`);
}
