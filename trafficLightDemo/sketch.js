// Traffic Light Starter Code
// Nini
// 09/28/2022

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lightColor = "red";
let lastTimeSwitched = 0;
let redLightDuration = 5000;
let yellowLightDuration = 1000;
let greenLightDuration = 5000;

function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  checkIfLightSwitched();
  correctColor();
  drawLights();
}

function checkIfLightSwitched() {
  if (lightColor === green && lastTimeSwitched + greenLightDuration) {
    lightColor = "yellow";
    lastTimeSwitched = millis;  
  }
  if (lightColor === green && lastTimeSwitched + greenLightDuration) {
    lightColor = "green";
    lastTimeSwitched = millis();

    if (lightColor === green && lastTimeSwitched + redLightDuration) {
      lightColor = "red";
      lastTimeSwitched = millis();
    }
  }
}

function drawLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function correctColor() {
  if (lightColor === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (lightColor === "green") {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
  else if (lightColor === "yellow"){
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
}