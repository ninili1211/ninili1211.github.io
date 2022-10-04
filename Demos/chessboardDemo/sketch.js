//Chessboard
// Li
//Sept 19, 2022

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  drawBoard();
}

function drawBoard() {
  let cellWidth = width/8;
  let cellHeight = height/8;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }

  let isWhite = true;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (isWhite) {
        fill("white");
      } 
      else {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      isWhite = !isWhite;
    }
    isWhite = !isWhite; //flip boolean in between rows
  }
}

function windowResized() {
  setup();
}