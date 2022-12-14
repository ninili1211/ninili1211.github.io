// Oop Bullet
// Nini
// 11/16/22

class Bullet {
  constructor(theImage) {
    this.x = 200;
    this.y = 250;
    this.radius = 3;
    this.dx = 5;
    this.image = theImage;
  }
  
  move() {
    this.x += this.dx;
  }

  isDead() {
    return this.x >= width;
  }

  display() {
    image(this.image, this.x, this.y, this.image.width & 0.3. this.image.height * 0.3);
  }
}

let bullets = [];
let bulletImg;

function preload() {
  bulletImg = loadImage("bulletBill.png");
}

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

function keyPressed() {
  let theBullet = new Bullet(bulletImg);
  bullets.push(theBullet);
}