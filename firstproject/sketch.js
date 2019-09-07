// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redAmmount = 0 
let redChangeAmount = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fill(redAmmount, 0, 225);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
  redAmmount += redChangeAmount;

  if (redAmmount >=255) {
    redChangeAmount *= -1;
  } if (redAmmount <= 0) {
    redChangeAmount *= -1; 
  }
 
}
