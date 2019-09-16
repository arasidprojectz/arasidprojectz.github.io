// Interactive Scene
// Al Rasid Mamun
// Date
//
// Extra for Experts:
// - sound
// - make your own shape - mouse
// - resizing window
// - mouse wheel - zoom in/out

let gameSetup;
let characterSetup;
let bulletSetup;
let letters;
let enemy; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // enemy = new Enemy(width/3 , height/2, 50, 100);
  
  gameSetup = {
  };

  characterSetup = {
    x: width/2, 
    y: height/2,
    rectWidth: 50,
    rectHeight: 100,
  };

  bulletSetup = {
    x: width/2,
    y: height/2,
    size: 10,
  };

  letters = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
  };
}

function draw() {
  background(220);
  // enemy.display();
  // enemy.interect();
  makeCharacter();
  makeBullet();
}

function makeCharacter() {
  fill(255);
  rectMode(CENTER);
  rect(characterSetup.x, characterSetup.y, characterSetup.rectWidth, characterSetup.rectHeight);
  if (keyIsPressed && keyCode === RIGHT_ARROW || keyIsPressed && keyCode === letters.d) {
    characterSetup.x += 1;
  } 
  if (keyIsPressed && keyCode === LEFT_ARROW ||keyIsPressed && keyCode === letters.a) {
    characterSetup.x -= 1;
  } 
  if (keyIsPressed && keyCode === UP_ARROW || keyIsPressed && keyCode === letters.w) {
    characterSetup.y -= 1;
  } 
  if (keyIsPressed && keyCode === DOWN_ARROW ||keyIsPressed && keyCode === letters.s) {
    characterSetup.y += 1;
  }    
}

function makeBullet() {
  ellipse(bulletSetup.x, bulletSetup.y, bulletSetup.size, bulletSetup.size);
  if (mouseIsPressed) {
    bulletSetup.x += width;
  }
}

