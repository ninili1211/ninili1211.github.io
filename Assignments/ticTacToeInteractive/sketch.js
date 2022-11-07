//Interactive Assignment - Tic Tac Toe (had some problems pop up with Gomoku that I simply could not fix) 
//Nini Li
//Sept 20, 2022
//Extra For Experts - 
//  Studied how to create objects by using the "class" function
//    -"class" creates objects of which can be called using "this"
//  Learnt about pop ups using "alert"
//  Used "translate" to center text on tiles
//  "change" is called when an element of a function changes
//  *Exclude 2D Arrays since we learnt it in class already*
// Apologies for turning this in so late...

//global variables
let tileSize = 133; 
let tileRows = []; 
let currentPlayer = "X"; 

//setup
function setup() {
  createCanvas(400, 400);
  setupTiles();
}

function setupTiles() {
  for (row = 0; row < 3; row++) {
    tileRows[row] = [];
    for (col = 0; col < 3; col++) {
      tileRows[row][col] = new Tile(col, row);
    }
  }
}

//draw
function draw() {
  background(255, 232, 214);
  drawGrid();
  drawTiles();
  showTurn();
}

//game board
function drawGrid() {
  noFill();
  stroke(0);
  for (row = 0; row < 3; row++) {
    line(0, row * tileSize, tileSize * 3, row * tileSize);
  }
  for (col = 0; col < 3; col++) {
    line(col * tileSize, 0, col * tileSize, tileSize * 3);
  }

}
function drawTiles() { 
  //tiles
  for (row = 0; row < 3; row++) {
    for (col = 0; col < 3; col++) {
      tileRows[row][col].show();
    }
  }
}

//who's turn is it?
function showTurn(){
  noStroke();
  fill(100, 0, 0);
  text( "Turn: " + currentPlayer, 10, 20);
}

function switchPlayer() { 
  //change turns
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

//when mouse is clicked
function mouseClicked() {
  for (row = 0; row < 3; row++) {
    for (col = 0; col < 3; col++) {
      ifEmpty(tileRows[row][col]);
    }
  }
}

function ifEmpty(currentTile) { 
  //check if tile empty
  if (currentTile.isMouseInBounds() && currentTile.isEmpty()) {
    currentTile.change(currentPlayer)
    switchPlayer();
  }
}

//making each tile an actual object
class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.theTurn = " ";
  }

  change(theTurn) {
    //ensures that the letter on the tile is correct
    if (theTurn == "X") {
      this.theTurn = "X";
    } else if (theTurn == "O") {
      this.theTurn = "O";
    }
  }

  isEmpty() {
    if (this.theTurn == " ") {
      //if empty
      return true;
    } else {
      //if not then error
      alert("Must place on empty tile");//found alert outside of p5js references
      //thankful that the pop up actually works
      return false;
    }
  }

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
  show() {
    let dx = this.x * tileSize;
    let dy = this.y * tileSize;
    if (this.isMouseInBounds()) {
      fill(150);
      rect(dx, dy, tileSize, tileSize);
    }

    //display text
    fill(0);
    push();
    translate(tileSize/2, tileSize/2); //still struggling with centering the entire thing, so i just did the text alone
    text(this.theTurn, dx, dy);
    pop();
  }
}