// Sudoku
// Nini
// 10/28/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let tileSize = 133; 

let grid = [[0, 0, 7, 4, 9, 1, 6, 0, 5],
  [2, 0, 0, 0, 6, 0, 3, 0, 9],
  [0, 0, 0, 0, 0, 7, 0, 1, 0],
  [0, 5, 8, 6, 0, 0, 0, 0, 4],
  [0, 0, 3, 0, 0, 0, 0, 9, 0],
  [0, 0, 6, 2, 0, 0, 1, 8, 7],
  [9, 0, 4, 0, 7, 0, 0, 0, 2],
  [6, 7, 0, 8, 3, 0, 0, 0, 0],
  [8, 1, 0, 0, 4, 5, 0, 0, 0]];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  displayGrid(grid);
}

function mousePressed() {
  console.log(mouseX, mouseY);
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;

  let x = Math.floor(mouseX/cellWidth);
  let y = Math.floor(mouseY/cellHeight);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  
}

function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("#c6d2ed");
      }
      else if (grid[y][x] === 1) {
        fill("#edf6f9");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}