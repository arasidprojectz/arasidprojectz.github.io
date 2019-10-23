
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
  // assumes the grib is a square
  for (let y=0; y<theGrid[0].length; y++) {
    for (let x=0; x<theGrid[0].length; x++) {
      if (theGrid[x][y] === 0) {
        fill(255);
      }
      else {
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
