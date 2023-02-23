let player = new Player();
let computer = new Computer();
let image;

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

function images() {
 const diceNumber = Math.floor(Math.random() * 6) + 1;
 if (diceNumber === 1) {
  document.querySelector("#dice-image").setAttribute("src", "img/die1.png");
 } else if (diceNumber === 2) {
  document.querySelector("#dice-image").setAttribute("src", "img/die2.png");
 } else if (diceNumber === 3) {
  document.querySelector("#dice-image").setAttribute("src", "img/die3.png");
 } else if (diceNumber === 4) {
  document.querySelector("#dice-image").setAttribute("src", "img/die4.png");
 } else if (diceNumber === 5) {
  document.querySelector("#dice-image").setAttribute("src", "img/die5.png"); 
 } else {
  document.querySelector("#dice-image").setAttribute("src", "img/die6.png");
}
console.log("Where's the images?");
}

// function(){
//   const diceNumber = Math.floor(Math.random() * 6) + 1;
//   if  (diceNumber===1){
//     document.querySelector(".dice")
//   }
// }
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
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  if (player.turn === 1) {
    updateScore(diceNumber, player);
     // updates the UI to display the updated score
    document.getElementById("player-score").innerText = player.score;
  } else {
    updateScore(diceNumber, computer);
    document.getElementById("computer-score").innerText = computer.score;
  }  
 images();
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
  displayWinner();
 }

 //Who is the winner
function displayWinner() {
 if (player.currentScore >= 100) {
 document.querySelector("h3").innerText = "The winner is Player!";
 console.log("The winner is Player!");
 } else if (computer.currentScore >= 100) {
 document.querySelector("h3").innerText = "The winner is Computer!";
 console.log("The winner is Computer!");
 } 
}

//Game Reset 
//resets the game
function resetGame() { 
  player.currentScore = 0;
  computer.currentScore = 0;
  document.getElementById("player-score").innerText = 0;
  document.getElementById("computer-score").innerText = 0;
  document.getElementById("player-current-score").innerText = 0;
  document.getElementById("computer-current-score").innerText = 0;
  document.getElementById("current-turn").innerText = "Player's Turn";
  document.querySelector("h3").innerText = null;
}


window.addEventListener("load", function(event) {
  const holdButton = document.getElementById("hold-button");
  holdButton.addEventListener("click", hold);
  const rollButton = document.getElementById("roll-button");
  rollButton.addEventListener("click", roll);
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetGame);
 });
     