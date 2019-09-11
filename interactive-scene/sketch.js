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
let letters;
let enemy; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  enemy = new Enemy(width/3 , height/2, 50, 100);
  gameSetup = {
  };

  characterSetup = {
    x: width/2, 
    y: height/2,
    rectWidth: 50,
    rectHeight: 100,
    bulletX: width/2, 
    bulletSize: 20,
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
  enemy.display();
  enemy.interect();
  makeCharacter();
  makeBullet();
}

function makeCharacter() {
  fill(255);
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
  ellipse(characterSetup.bulletX, characterSetup.y, characterSetup.bulletSize);
  if (keyIsPressed && keyCode === 32) {
    characterSetup.bulletX -= 5;
  }
}


class Enemy {
  constructor(tempX, tempY, tempWidth, tempHeight) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempWidth;
    this.height = tempHeight;
    this.collision = false;
  }
  display() {
    rect(this.x, this.y, this.width, this.height);
  }

  interect() {
    this.collision = collideRectCircle(characterSetup.bulletX, characterSetup.y, characterSetup.bulletSize, characterSetup.bulletSize, this.x, this.y, this.width, this.height);
    if (this.collision === true) {
      fill(0);
      rect(this.x, this.y, this.width, this.height);
    }
  }  
}