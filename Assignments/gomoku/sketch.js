//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022
//Extra For Experts - Centered Circle that's not an image. coded algorithm

//global variables
let colourstate = "black";
let x = 400;
let y = 400;
let cellWidth, cellHeight, circleX, circleY, coordinateX, coordinateY;
let woodImage;
let scalar = 7;

//setup + draw
function preload() {
  woodImage = loadImage("wood.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255, 232, 214);
  image(woodImage, 0, 0, woodImage.width*scalar, woodImage.height*scalar);
  drawChessboard();
  drawCoordinates();
}

function windowResized() {
  setup();
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
  push();
  translate(width/4, cellHeight);
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 18; x++) {
      stroke("gray");
      fill(255, 232, 214);
      rect(x*cellWidth-25, y*cellHeight-25, cellWidth, cellHeight);
    }
  }
  pop();
  if (colourstate === "black") {
    blackDot();
  }
}

//coordinates
function drawCoordinates() {
  cellWidth = width*0.75/18;
  cellHeight = height/19;
  coordinateX = 0;
  coordinateY = 0;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }
  for (let i = 0; i < 18; i += cellWidth) {
    for (let j = 0; j < 18; j += cellHeight) {
      ellipse(coordinateX, coordinateY, 10, 10);
      console.log(i*cellWidth);
      console.log(j*cellHeight);
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