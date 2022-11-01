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
  imageMode(CENTER);
}

function draw() {
  background(255, 232, 214);
  translate (windowWidth / 4);
  if (colourState === "black") {
    blackDot();
  }
  if (colourState === "white") {
    whiteDot();
  }
  drawGrid();
  if (colourState === "black") {
    blackDot();
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
    for (let y = 0; y < 14; y++) {
      for (let x = 0; x < 14; x++) {
        rect(x*cellWidth - 25, y*cellHeight - 25, cellWidth, cellHeight);
      }
    }
  }

function mousePressed() {
  if (state === "wait" && mouseIn)
}

//the pieces
function blackDot() {
  let cellWidth = boardImage.width/14;
  let cellHeight = boardImage.height/14;
  fill("black");
  ellipse(mouseX, mouseY, cellWidth, cellHeight);
}

function whiteDot() {
  let cellWidth = boardImage.width/14;
  let cellHeight = boardImage.height/14;
  fill("black");
  ellipse(mouseX, mouseY, cellWidth, cellHeight);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}