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
function setup() {
  let windowHeight = windowWidth;
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255, 232, 214);
  translate (windowWidth / 4);
  drawGrid();
  if (colourstate === "black") {
    blackDot();
  }
}

function windowResized() {
  setup();
}

//DotGrid
// function drawDotGrid() {
//   let dotCellWidth = windowWidth/2 - boardImage.width/2 + cellWidth/2;
//   cellHeight = height/18;
//   if (dotCellWidth > cellHeight) {
//     dotCellWidth = cellHeight;
//   }
//   else {
//     cellHeight = dotCellWidth;
//   }
  
//   for (let y = 0; y < 8; y++) {
//     for (let x = 0; x < 8; x++) {
//       ellipse(x*dotCellWidth, y*cellHeight, 2, 2);
//     }
//   }
// }
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