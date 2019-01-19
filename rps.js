class GameState {
  constructor(round, player, computer) {
    this.round = round;
    this.player = player;
    this.computer = computer;
    this.max = 5;
  }

  playRound(playerOne, playerTwo) {
    const rules = {
      rock: "scissors",
      scissors: "paper",
      paper: "rock"
    };
    if (this.round > this.max) {
      return this;
    } else if (rules[playerOne] === playerTwo) {
      return new GameState(this.round + 1, this.player + 1, this.computer);
    } else if (rules[playerTwo] === playerOne) {
      return new GameState(this.round + 1, this.player, this.computer + 1);
    } else {
      return new GameState(this.round + 1, this.player, this.computer)
    }
  }

  get text() {
    if (this.round > this.max) {
      return this.player > this.computer ? "You've won!" : this.player === this.computer ? "You've tied." : "You've lost.";
    } else {
      return `Round: ${this.round}, You: ${this.player}, Computer: ${this.computer}`;
    }
  } 
}

// Generate a random rock-paper-scissors string
function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

function render(state) {
  document.querySelector('.score').textContent = state.text;
}

let game = new GameState(1, 0, 0);

document.querySelectorAll('button').forEach(button => {
  button.addEventListener("click", event => {
    game = game.playRound(event.target.name, computerPlay());
    render(game);
  });
});