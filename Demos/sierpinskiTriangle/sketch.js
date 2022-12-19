// Sierpinski Triangle

let triangleVertices = [
  {x: 500, y: 100},
  {x: 100, y: 600},
  {x: 900, y: 600}
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices);
}

function sierpinski(points, depth) {
  triangle(points[0].x, points[0].y, 
    points[1].x, points[1].y,
    points[2].x, points[2].y);
}