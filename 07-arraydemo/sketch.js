// Array and Object Demo

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
}

function draw() {
  for (let i=0; i<shapes.length; i++) {
    fill(0);
    ellipse(shapes[i].x, shapes[i].y, shapes[i].radius*2, shapes[i].radius*2)
  }
}

function mousePressed() {
  let someShape = {
    x: mouseX,
    y: mouseY, 
    radius: random(10, 50),
  };
  shapes.push(someShape);
}