// Oop Bullet
// Nini
// 11/16/22

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(25, 100);
    this.dx = 5;
    this.theColor = color(random(255), random(255), random(255), random(255));
  }
  
  move() {
    this.x += this.dx;

    // //left-right edges
    // if (this.x + this.radius > width ||
    //   this.x - this.radius < 0) {
    //   this.dx *= -1;
    // }

    // //top-bottom edges
    // if (this.y + this.radius > height || 
    //   this.y - this.radius < 0) {
    //   this.dy *= -1;
    // }
  }

  display() {
    let x = 50;
    let y = 50;
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }
}

let theBullet = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let someBullet = new Bullet(100, 100);
  theBullet.push(someBullet);
}

function draw() {
  background(220);
  for (let i = 0; i < theBullet.length; i++) {
    theBullet[i].move();
    for (let j = 0; j < theBullet.length; j++) {
      if (i !== j) {
        theBullet[i].collisionCheck(theBullet[j]);
      }
    }
    theBullet[i].display();
  }
}

function mousePressed() {
  let someBullet = new Bullet(x, y);
  theBullet.push(theBullet);
}
