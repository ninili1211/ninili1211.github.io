// Checkers
// Nini
// 10/28/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 8;
const COLS = 8;
let grid;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = windowHeight/COLS;
  cellHeight = windowHeight/ROWS;
  grid = create2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}