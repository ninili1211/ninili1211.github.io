// Walker Oop Demo
// Nini
// 11/14/22

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.colour = "red";
    this.speed = 5;
    this.radius = 2;
  }
  display() {
    stroke(this.colour);
    fill(this.colour);
    circle(this.x, this.y, this.radius * 2);
  }
  
  move() {
    let choice = random(100);
    if (choice < 25) {
      this.y -+ this.speed;
      else if (this.choice < 50) {
        this.y += this.speed;
      }
      else if (this.choice < 50) {
        this.y += this.speed;
      }
      else if (this.choice < 75) {
        this.y += this.speed;
      }
      else if (choice < 50) {
        this.y += this.speed;
      }
    }
}
}

let michael;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  katherine.colour = "blue" 
  katherine = new Walker(200, 300);
  thing = new Walker(500.,)
  
}

function draw() {
  michael.move();
  katherine.move();
  michael.display();
  katherine.display();
}
