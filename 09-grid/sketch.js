
let grid = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2DArray(20, 20);
}

function draw() {
  background(225);
  displayGrid(grid);

}

function displayGrid(theGrid) {
  for (let y=0; y<theGrid.length; y++) {
    for (let x=0; x<theGrid.length; x++) {
      if (theGrid[x][y] === 0) {
        stroke(0);
        fill(255);
      }
      else {
        stroke(255);
        fill(0);
      }
      let cellSize = width/theGrid[0].length;
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function create2DArray(cols, rows) {
  let someArray = [];
  for (let i=0; i<10; i++) {
    someArray.push([]);
    for (let j=0; j<10; j++) {
      if (random(100) < 50) {
        someArray[i].push(1);
      }
      else {
        someArray[i].push(0);
      }
    }
  }
  return someArray;
}
