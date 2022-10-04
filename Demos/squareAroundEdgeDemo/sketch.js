// Square Around Edge Demo
// Nini
// 09/26/2022
let x, y, squareSize, speed, state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 70;
  speed = 5;
  state = "right";
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawSquare();
  moveSquare();
}

function drawSquare() {
  fill("black");
  square(x, y, squareSize);
}

function moveSquare() {
  if (state === "right") {
    x += speed;
    if (x + squareSize >= width) {
      x = width - squareSize;
      state = "down";
    }
  }
  if (state === "down") {
    y += speed;
    if (y + squareSize >= height) {
      y = height - squareSize;
      state = "left";
    }
  }
  if (state === "left") {
    x -= speed;
    if (x <= 0) {
      x = 0;
      state = "up";
    }
  }
  if (state === "up") {
    y -= speed;
    if (y <= 0) {
      y = 0;
      state = "right";
    }
  }
}
