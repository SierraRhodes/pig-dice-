let player = new Player();
let computer = new Computer();

//  Business Logic
function rollDice() {
 const diceNumber = Math.floor(Math.random() * 6) + 1;
 return diceNumber;
}

//Player
function Player() {
  this.diceNumber = [];
  this.currentScore = 0;
  this.score = 0;
  this.turn = 0;
  
}

//Computer
function Computer() {
  this.diceNumber = [];
  this.currentScore = 0;
  this.score = 0;
  this.turn = 0;
}

function updateScore(diceNumber, player) {
  if (diceNumber === 1) {
    player.score = 0;
    switchPlayer();
  } else {
    player.score += diceNumber;
  }
}


//UI Logic 

function roll() {
  event.preventDefault();
  const diceNumber = rollDice();
  // determine which player's turn it is
  if (player.turn === 1) {
    updateScore(diceNumber, player);
    document.getElementById("player-score").innerText = player.score;
  } else {
    updateScore(diceNumber, computer);
    document.getElementById("computer-score").innerText = computer.score;
  }
  // update the UI to display the current score
}
function switchPlayer() {
  // switch the turn to the other player
  if (player.turn === 1) {
    player.turn = 0;
    computer.turn = 1;
    document.getElementById("current-turn").innerText = "Computer's turn!";
  } else {
    player.turn = 1;
    computer.turn = 0;
    document.getElementById("current-turn").innerText = "Player's turn";
  }
}

//Hold

window.addEventListener("load", function(event) {
  const rollButton = document.getElementById("roll-button");
  rollButton.addEventListener("click", roll);
 });
     