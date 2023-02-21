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
    updateScore(diceNumber);
  } else {
    updateScore(diceNumber, computer);
  }
  // update the UI to display the current score for the active player
}
function switchPlayer() {
  // switch the turn to the other player
  if (player.turn === 1) {
    player.turn = 0;
    computer.turn = 1;
  } else {
    player.turn = 1;
    computer.turn = 0;
  }
}



window.addEventListener("load", function(event) {
  const rollButton = document.getElementById("roll-button");
  rollButton.addEventListener("click", roll);
  if (player.turn === 1) {
    document.getElementById("player-score").innerText = player.score;
  } else {
    document.getElementById("computer-score").innerText = computer.score;
  }
 });
     
