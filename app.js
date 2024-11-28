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

