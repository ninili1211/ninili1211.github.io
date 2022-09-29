//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022

//background
let x = 400;
let y = 400;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 232, 214);
  drawChessboard();
}

function drawChessboard() {
  let cellWidth = width/18;
  let cellHeight = height/18;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }
  translate(width/4, height/1000);
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 18; x++) {
      stroke("gray");
      fill(255, 232, 214);
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function windowResized() {
  setup();
}

function blackDot() {
  fill("black");
  ellipse(56, 46, 55, 55);
}