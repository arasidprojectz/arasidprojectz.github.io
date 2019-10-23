// CannonBall

let x, y, rectW, rectH; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 75; 
  y = height - 150; 
  rectW = 50;
  rectH = 125;
}

function draw() {
  background(225);
  displayCannon(); 
}

function displayCannon() {
  translate(x, y);
  rect(0, 0, rectW, rectH);
  let angle = atan2(mouseY - y, mouseX - x);
  let r = -0;
  let dx = r * cos(angle);
  let dy = r * sin(angle);

  if (mouseIsPressed) {
    let eX = x;
    let eY = y;
    ellipse(eX, eY, 30, 30)
    eX += dx;
    eX += dy;
  }
}
