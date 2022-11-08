// Sudoku
// Nini
// 10/28/2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let tileSize = 133; 
let tileRows = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]]; 

//setup
function setup() {
  createCanvas(400, 400);
  setupTiles();
}

function setupTiles() {
  for (let row = 0; row < 9; row++) {
    tileRows[row] = [];
    // for (let col = 0; col < 9; col++) {
    //   tileRows[row][col] = new Tile(col, row);
    // }
  }
}

//reset
function keyPressed() {
  resetGame();
}

function resetGame() {
  createCanvas(400, 400);
  setupTiles();
}

//draw
function draw() {
  background(255, 232, 214);
  drawGrid();
  drawTiles();
}

//game board
function drawGrid() {
  noFill();
  stroke(0);
  for (let row = 0; row < 9; row++) {
    line(0, row * tileSize, tileSize * 9, row * tileSize);
  }
  for (let col = 0; col < 9; col++) {
    line(col * tileSize, 0, col * tileSize, tileSize * 9);
  }

}
function drawTiles() { 
  //tiles
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      tileRows[row][col].show();
    }
  }
}

//when mouse is clicked
// function mouseClicked() {
//   for (let row = 0; row < 9; row++) {
//     for (let col = 0; col < 9; col++) {
//       ifEmpty(tileRows[row][col]);
//     }
//   }
// }

// function ifEmpty(currentTile) { 
//   //check if tile empty
//   if (currentTile.isMouseInBounds() && currentTile.isEmpty()) {
//     currentTile.change(currentPlayer);
//     switchPlayer();
//   }
// }

// //making each tile an actual object
// class Tile {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.theTurn = " ";
//   }

//   isEmpty() {
//     if (this.theTurn === " ") {
//       //if empty
//       return true;
//     } 
//     else {
//       //if not then error
//       alert("Must place on empty tile");//found alert outside of p5js references
//       //thankful that the pop up actually works
//       return false;
//     }
//   }

  //checking if mouse is inside the tile
  isMouseInBounds() {
    let dx = this.x * tileSize;
    let dy = this.y * tileSize;
    if (mouseX > dx &&
      mouseX < dx + tileSize &&
      mouseY > dy &&
      mouseY < dy + tileSize) {
      return true;
    }
    return false;
  }

  //show the tile
  // show() {
  //   let dx = this.x * tileSize;
  //   let dy = this.y * tileSize;
  //   if (this.isMouseInBounds()) {
  //     fill(150);
  //     rect(dx, dy, tileSize, tileSize);
  //   }

  //   //display text
  //   fill(0);
  //   push();
  //   translate(tileSize/2, tileSize/2); //still struggling with centering the entire thing, so i just did the text alone
  //   text(this.theTurn, dx, dy);
  //   pop();
  // }
}