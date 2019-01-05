const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
const maxGames = 5;
const rules = {rock:"scissors", paper:"rock", scissors:"paper"};

// Generate a random rock-paper-scissors string
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

// Play a single round when key event occurs
function playRound(e) {
  const playerSelection = e.target.name;
  const computerSelection = computerPlay();
  const rules = {rock:"scissors", paper:"rock", scissors:"paper"};
  if (gamesPlayed < 5) {
    gamesPlayed += 1
    if (rules[playerSelection] === computerSelection) playerScore += 1;
    else if (rules[computerSelection] === playerSelection) computerScore += 1;

    updateResult(playerSelection, computerSelection);
    updateScore();
  }
}

function updateResult(playerSelection, computerSelection) {
  const resultBox = document.querySelector('#result')
  resultBox.textContent = `You played ${playerSelection}, Computer played ${computerSelection}`;
}

function updateScore() {
  const scoreBox = document.querySelector('#score');
  scoreBox.textContent = `Round: ${gamesPlayed} You: ${playerScore} Computer: ${computerScore}`;
}
