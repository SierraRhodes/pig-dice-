let player = new Player();
let computer = new Computer();

//Business Logic 

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

function rollDice() {
 const diceNumber = Math.floor(Math.random() * 6) + 1;
 return diceNumber;
}

function updateScore(diceNumber, player) {
  if (diceNumber === 1) {
    player.score = 0;
    switchPlayer();
  } else {
    player.score += diceNumber;
    player.currentScore += diceNumber;
  }
}


//UI Logic 

function roll() {
  event.preventDefault();
  const diceNumber = rollDice();
  // determine which player's turn it is
  if (player.turn === 1) {
    updateScore(diceNumber, player);
     // updates the UI to display the updated score
    document.getElementById("player-score").innerText = player.score;
  } else {
    updateScore(diceNumber, computer);
    document.getElementById("computer-score").innerText = computer.score;
  }
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

// Hold

function hold() {
  event.preventDefault();
  if (player.turn === 1) {
   player.currentScore;
   document.getElementById("player-current-score").innerText = player.currentScore;
   switchPlayer();
   player.score = 0;
  } else {
   computer.currentScore;
   document.getElementById("computer-current-score").innerText = computer.currentScore;
   switchPlayer();
   computer.score = 0;
  }
  
 }






window.addEventListener("load", function(event) {
  const holdButton = document.getElementById("hold-button");
  holdButton.addEventListener("click", hold);
  const rollButton = document.getElementById("roll-button");
  rollButton.addEventListener("click", roll);
 });
     