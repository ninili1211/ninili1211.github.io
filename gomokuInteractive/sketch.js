//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022

//grid
function setup() {
  createCanvas(windowWidth, windowHeight);
  windowHeight = 400;
  windowHeight = 400;
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

//black controls


//white controls


//rules

