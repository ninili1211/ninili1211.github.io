// Image Demo
// Nini Li
// 09/22/2022

let fishImage;
let scalar = 3.5;

function preload() {
  fishImage = loadImage("fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  imageMode(CENTER);
}

function windowResized() {
  setup();
}

function draw() {
  background(220);
  image(fishImage, mouseX, mouseY, fishImage.width*scalar, fishImage.height*scalar);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    scalar += 0.25;
  } 
  else if (keyCode === DOWN_ARROW) {
    scalar += -0.25;
  }
}