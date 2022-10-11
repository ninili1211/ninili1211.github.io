//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022
//Extra For Experts - Centered Circle that's not an image. coded algorithm

//global variables
let state = "start";
let colourstate = "black";
let x = 400;
let y = 400;
let cellWidth, cellHeight, circleX, circleY;

//setup + draw
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 232, 214);
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    drawChessboard();
    drawCoordinates();
  }
}

function windowResized() {
  setup();
}

//start screen
function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "main";
  } 
}

function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);
  fill("white");
  textSize(50);
  text("Play Gomoku!", 480, 490);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
         mouseY >= top && mouseY <= bottom;
}

//chessboard
function drawChessboard() {
  cellWidth = width*0.75/18;
  cellHeight = height/18;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }
  translate(width/4, height/1000+10);
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 18; x++) {
      stroke("gray");
      fill(255, 232, 214);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
  if (colourstate === "black") {
    blackDot();
  }
}

//coordinates
function drawCoordinates() {
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 18; x++) {
      stroke("gray");
      fill(255, 232, 214);
      ellipse(0, 0, 10, 10);
    }
  }
}

//the pieces
function blackDot() {
  circleX = cellWidth;
  circleY = cellHeight;
  fill("black");
  ellipse(mouseX, mouseY, circleX, circleY);
}

function whiteDot() {
  circleX = cellWidth;
  circleY = cellHeight;
  fill("white");
  ellipse(mouseX, mouseY, circleX, circleY);
}