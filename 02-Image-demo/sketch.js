// Project Title
// Al Rasid Mamun
// Sept 9, 2019

let img;
let scalar;


function setup() {
  createCanvas(windowWidth, windowHeight);
  scalar = 1;
}

function draw() {
  background(225);
  imageMode(CENTER);
  image(img, mouseX, mouseY, img.width * scalar, img.height * scalar );
  if (keyIsDown(UP_ARROW)) {
    scalar *= 1.01;
  } else if (keyIsDown(DOWN_ARROW)) {
    scalar /= 1.01;
  } 
}

function preload() {
  img = loadImage("assets/mario.png");
}