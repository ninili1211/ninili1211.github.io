// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

mousePressed() {
  spawnCircle();
}
function spawnCircle() {
  let thisCircle = {
    x: mouseX,
    y: mouseY,
    radius: 50, 
  };
  theCircles.push(thisCircle);
}