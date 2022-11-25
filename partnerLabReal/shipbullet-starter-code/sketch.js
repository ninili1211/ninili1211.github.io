// OOP Pair Programming Starter Code
// Nick and Nini
// 11/25/22


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = width/2;
    this.y = height/2;
    this.dx = 5;
    this.dy = 5;
    this.theImage = shipImage;
    this.bullet;
  }

  display() {
    image(this.theImage, this.x, this.y);
  }

  update() {
    if (keyIsPressed === true) {
      if (keyCode === RIGHT_ARROW) {
        this.x += this.dx;
      }
      if (keyCode === LEFT_ARROW) {
        this.x -= this.dx;
      }
      if (keyCode === UP_ARROW) {
        this.y -= this.dy;
      }
      if (keyCode === DOWN_ARROW) {
        this.y += this.dy;
      }
    }

  }

  handleKeyPress() {
    if (keyCode === " ") {
      this.theBullet = new Bullet(this.theBullet.x, this.theBullet.y, this.theBullet.dx, this.theBullet.dy);
    }
  }
}
// if doing extra for experts, show bullet(s)


// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 5;
    this.theImage = bulletImage;
  }

  update() {
    this.y += this.dy;
  }

  display() {
    image(this.image, this.x, this.y, this.dx, this.dy);
  }

  isOnScreen() {
    
  }
}

