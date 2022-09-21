//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022

//grid
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#FFE8D6");
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

  let isWhite = true;
  for (let y = 0; y < 18; y++) {
    for (let x = 0; x < 18; x++) {
      stroke("gray");
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
    isWhite = !isWhite; //flip boolean in between rows
  }
}

function windowResized() {
  setup();
}

//black controls


//white controls


//rules

