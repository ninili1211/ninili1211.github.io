// Gomoku Interactive
// Nini Li
// 09/20/22
//
// Extra for Experts:
// - 

//variables
let state = "black";
let scalar = 7;
let x, y, cellWidth, cellHeight, circleX, circleY, coordinateX, coordinateY;
let woodImage;

//setup + draw
function preload() {
  woodImage = loadImage("wood.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  windowResized();
  chessboard();
  image(woodImage, 0, 0, woodImage.width * scalar);
}

function windowResized() {
  setup();
}

function chessboard() {
  
}

function coordinates() {

}

function blackDot() {
  
}

function whiteDot() {

}