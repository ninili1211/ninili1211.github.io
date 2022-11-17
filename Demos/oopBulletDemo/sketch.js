// Oop Bullet
// Nini
// 11/16/22

class Bullet {
  constructor() {
    this.x = 200;
    this.y = 500;
    this.radius = 3;
    this.dx = 5;
  }
  
  move() {
    this.x += this.dx;
  }

  isDead() {
    return this.x >= width;
  }

  display() {
    fill("black");
    circle(this.x, this.y, this.radius*2);
  }
}

let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let theBullet of bullets) {
    theBullet.move();
    theBullet.display();
  }
 
  //delete dead bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].isDead()) {
      bullets.splice(i, 1);
    }
  }
}

function mousePressed() {
  let theBullet = new Bullet();
  bullets.push(theBullet);
}