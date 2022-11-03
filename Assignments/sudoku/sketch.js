// Checkers
// Nini
// 10/28/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 9;
const COLS = 9;
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
  background("white");
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
  let isGreen = true;
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (isGreen === true) {
        fill("#d8f3dc");
      }
      else {
        fill("#a2d2ff");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      isGreen = !isGreen;
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