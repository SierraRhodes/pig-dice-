//  Business Logic
const diceRoll = Math.floor(Math.random() * 6) + 1;
const diceRoll2 = Math.floor(Math.random() * 6) + 1;
let image;
let image2;
switch(diceRoll){
 case 1: {image = 'img/die1.png'; break;}
 case 2: {image = 'img/die2.png'; break;}
 case 3: {image = 'img/die3.png'; break;}
 case 4: {image = 'img/die4.png'; break;}
 case 5: {image = 'img/die5.png'; break;}
 case 6: {image = 'img/die6.png'; break;}
 default:break;
}

switch(diceRoll2){
 case 1: {image2 = 'img/die1.png'; break;}
 case 2: {image2 = 'img/die2.png'; break;}
 case 3: {image2 = 'img/die3.png'; break;}
 case 4: {image2 = 'img/die4.png'; break;}
 case 5: {image2 = 'img/die5.png'; break;}
 case 6: {image2 = 'img/die6.png'; break;}
 default:break;
}

//Score
function Score() {
  this.player = [];
  this.computer = [];
}

//Player
function Player() {
  this.roll = 0;
  this.tempScore= 0;
  this.score = 0;
  this.turn = 0;
}

//Computer
function Computer() {
  this.roll = 0;
  this.tempScore= 0;
  this.score = 0;
  this.turn = 0;
}

//Checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    switchPlayer();
  } else {
    this.tempscore += this.roll;
  }
}


//Hold 



// UI Logic

// Winner
Player.prototype.winner = function() {
  if (this.player >= 100) {
  document.querySelector('h2').innerHTML = "The Winner is Player";
  console.log("The winner is player");
  } else
  document.querySelector('h2').innerHTML = "The Winner is Computer";
  }
  
  



window.addEventListener("load", function(event) {
        event.preventDefault();
        const imgElement = document.getElementById('dice-image');
        imgElement.src = image;
        const imgElement2 = document.getElementById("dice-image2");
        imgElement2.src = image2; 
        document.getElementById("result").innerHTML = "You rolled " + diceRoll + "!";
        document.getElementById("result2").innerHTML = "Computer rolled " + diceRoll2 + "!";
        console.log("event listener")
        const resetButton = document.getElementById("reset-button");
        resetButton.addEventListener("click", function() {
        document.getElementById("dice-game").reset();
        });
        const rollButton = document.getElementById('roll-button');
        rollButton.addEventListener("click", roll);
      });
      
