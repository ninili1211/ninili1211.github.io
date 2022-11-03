//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022
//Extra For Experts - Centered Circle that's not an image. coded algorithm

//global variables
let state = "wait";
let colourState = "black";
let x, y, cellWidth, cellHeight, circleX, circleY;
let scalar = 1;

//setup + draw
function setup() {
  let windowHeight = windowWidth;
  createCanvas(windowWidth, windowHeight);
  windowResized;
  imageMode(CENTER);
}

function draw() {
  background(255, 232, 214);
  translate (windowWidth / 4);
  drawGrid();
  if (colourState === "black") {
    blackDot();
  }
  if (colourState === "white") {
    whiteDot();
  }
}

function mousePressed() {
  if (colourState === "black") {
    colourState = "white";
  }
  if (colourState === "white") {
    colourState = "black";
  }
}

function windowResized() {
  setup();
}

function drawGrid() {
  translate (200, 25, 0)
    let cellWidth = width/18;
    let cellHeight = height/18;
    if (cellWidth > cellHeight) {
      cellWidth = cellHeight;
    }
    else {
      cellHeight = cellWidth;
    }
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        rect(x*cellWidth - 25, y*cellHeight - 25, cellWidth - 25, cellHeight - 25);
      }
    }
  }

//the pieces
function blackDot() {
  let cellWidth = width/18;
  let cellHeight = height/18;
  fill("black");
  ellipse(mouseX, mouseY, cellWidth, cellHeight);
}

function whiteDot() {
  let cellWidth = width/18;
  let cellHeight = height/18;
  fill("black");
  ellipse(mouseX, mouseY, cellWidth, cellHeight);
}