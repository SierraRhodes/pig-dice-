// Business Logic 

// Generate random numbers 1-6 

// const diceRoll = Math.floor(Math.random() * 6) + 1;
// let image;
// switch(diceRoll){
//  case 1: {image = 'img/die1.png'; break;}
//  case 2: {image = 'img/die2.png'; break;}
//  case 3: {image = 'img/die3.png'; break;}
//  case 4: {image = 'img/die4.png'; break;}
//  case 5: {image = 'img/die5.png'; break;}
//  case 6: {image = 'img/die6.png'; break;}
//  default:break;
// }
// document.getElementById('image').src = "path/dice/number"+rollResult+".jpg"
// document.getElementById("image1").src = "path/dice/number"+rollResult+".jpg"
// function rolldice(){
//    const rollResultElem = document.getElementById("roll-resilts")
//    const playerRandomNum = Math.floor(Math.random() * 6) + 1;
// }


// console.log(diceRoll)

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


// UI Logic


// Winner
function roll() {
  if(diceRoll > diceRoll2) {
  document.querySelector('h2').innerHTML = "The Winner is Player 1";
} else if (diceRoll < diceRoll2) {
  document.querySelector('h2').innerHTML = "The Winner is Computer";
} else if (diceRoll === diceRoll2) {
  document.querySelector('h2').innerHTML = "It's a Draw!";
}
console.log("What's going on?");
}


window.addEventListener("load", function(event) {
  // const form = document.querySelector ("form");
  //   form.onsubmit = function(event) {
        event.preventDefault();
        const imgElement = document.getElementById('dice-image');
        imgElement.src = image;
        const imgElement2 = document.getElementById("dice-image2");
        imgElement2.src = image2; 
        document.getElementById("result").innerHTML = "You rolled " + diceRoll + "!";
        document.getElementById("result2").innerHTML = "Computer rolled " + diceRoll2 + "!";
        const rollButton = document.getElementById('roll-button');
        rollButton.addEventListener("click", roll);
        // const resetButton = document.getElementById('reset-button');
        // resetButton.addEventListener("click", roll);
    
 });
