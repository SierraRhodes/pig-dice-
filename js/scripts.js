//  Business Logic

function rollDice() {
 const diceNumber = Math.floor(Math.random() * 6) + 1;
 return diceNumber;
}

function rollDice() {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  if (diceNumber === 1) {
  return 0;
}
return diceNumber;
}
























//Player
function Player() {
  this.dice = [];
  this.score = 0;
  this.turn = 0;
  
}

//Computer
function Computer() {
  this.roll = [];
  this.score = 0;
  this.turn = 0;
}

//Checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.score = 0;
    switchPlayer();
  } else {
    this.score += this.roll;
  }
}


//Hold 



// UI Logic

// Winner

  
  



window.addEventListener("load", function(event) {
        event.preventDefault();
        rollButton.addEventListener("click", rolldice);
      });
      
