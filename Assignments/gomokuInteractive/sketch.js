//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022
//Extra For Experts - Centered Circle that's not an image. coded algorithm

//global variables
let colourstate = "black";
let x, y, cellWidth, cellHeight, circleX, circleY;
let woodImage;
let boardImage;
let scalar = 1;

//setup + draw
function preload() {
  woodImage = loadImage("wood.jpg");
  boardImage = loadImage("gomoku.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255, 232, 214);
  image(woodImage, windowWidth/2, windowHeight/2, woodImage.width, woodImage.height);
  image(boardImage, windowWidth/2, windowHeight/2, boardImage.width, boardImage.height);
  drawDotGrid();
  if (colourstate === "black") {
    blackDot();
  }
}

function windowResized() {
  setup();
}

//DotGrid
function drawDotGrid() {
  let dotCellWidth = windowWidth/2 - boardImage.width/2 + cellWidth/2;
  cellHeight = height/18;
  if (dotCellWidth > cellHeight) {
    dotCellWidth = cellHeight;
  }
  else {
    cellHeight = dotCellWidth;
  }
  
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      ellipse(x*dotCellWidth, y*cellHeight, 2, 2);
    }
  }
}
  
for (let i = 0; i < 14; i++) {
  for(let j = 0; j < 14; j++) {
    ellipse(x, y, 5, 5);
    x += cellWidth;
    y += cellHeight;
  }
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