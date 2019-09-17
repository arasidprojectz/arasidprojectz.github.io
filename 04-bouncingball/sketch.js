// Project Title
// Al Rasid Mamun
// Sept 9, 2019

let x;
let y;
let dx;
let dy;
let radius;
let rectSize;
let mode;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2; 
  dx = random(-15, 15);
  dy = random(-15, 15);
  radius = 100;
  rectSize = 100;
  mode = "circle";
  
}

function draw() {
  background(225);
  moveShape();
  changeMode();
  if (mode === "circle") {
    displayCircle();
  }
  if (mode === "rectangle") {
    displayRectangle();
  }
}

function windowResized() {
  setup();
}

function moveShape() {
  // move
  x += dx;
  y += dy;
}

function displayCircle() {
  // bounce if needed
  if (x > width - radius/2 || x < 0 + radius/2) {
    dx *= -1;
  } if (y > height - radius/2 || y < 0 + radius/2) {
    dy *= -1;
  }
  fill(0);
  ellipse(x, y, radius);
}

function displayRectangle() {
  fill(0);
  rect(x, y, rectSize, rectSize);
  if (x > width - rectSize || x < 0) {
    dx *= -1;
  } if (y > height - rectSize || y < 0) {
    dy *= -1;
  }
}

function changeMode() {
  if (keyIsDown(UP_ARROW)) {
    mode = "circle";
  } if (keyIsDown(DOWN_ARROW)) {
    mode = "rectangle";
  }
}