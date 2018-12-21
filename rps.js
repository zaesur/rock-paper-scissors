// Generate a random rock-paper-scissors string. () -> String
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

// Play a single round. (String, String) -> Int
function playRound(playerSelection, computerSelection) {
  const rules = {rock:"scissors", paper:"rock", scissors:"paper"}
  const safePlayerSelection = playerSelection.toLowerCase();
  if (safePlayerSelection === computerSelection)
    return 0;
  else if (rules[safePlayerSelection] === computerSelection)
    return 1;
  else if (rules[computerSelection] === safePlayerSelection)
    return -1;
} 

// Check for valid input. String -> Boolean
function isValid(selection) {
  const validOptions = ["rock", "paper", "scissors"];
  return validOptions.includes(selection);
}

// Play a number of rounds and log the outcome. () -> ()
function game() {
  const numberOfGames = 5;
  let score = 0;
  let playerSelection;
  for (i = 0; i < numberOfGames; i++) {
    do {
      playerSelection = prompt();
    } while (! isValid(playerSelection));
    computerSelection = computerPlay();
    score += playRound(playerSelection, computerSelection);
  }
  console.log(score);
}