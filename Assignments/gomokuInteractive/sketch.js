//Interactive Assignment - Gomoku 
// Li
//Sept 20, 2022
//Extra For Experts - Centered Circle that's not an image. coded algorithm

//global variables
//Images
let boardImage;
let heartImages = [];
let crossImages = [];

//Actual Board 0-->User, -1-->Empty, 1-->Bot
let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

//To prevent Bot for playing untill the user has selected a valid board position.
let turn = true

//To display win or draw at the end of the game.
let win = false;

//To refresh the board and canvas.
let gameEnd = false;

//To stop user for clicking for sometime.
let play = true;

function preload() {
  boardImage = loadImage("board.png");
  for (let i = 0; i < 4; i++) {
    heartImages[i] = loadImage(`assets/imgs/heart${i}.png`);
  }
  for (let i = 0; i < 5; i++) {
    crossImages[i] = loadImage(`assets/imgs/cross${i}.png`);
  }
}


function setup() {
  createCanvas(600, 500);
  imageMode(CENTER);
  rectMode(CENTER);
  background(255);
  image(boardImage, width / 2, height / 2, 300, 300);
}


function mousePressed() {
  if (!play)
    return;
  if (gameEnd) {
    background(255);
    image(boardImage, width / 2, height / 2, 300, 300);
    gameEnd = false;
    return;
  } else {
    clickX = mouseX;
    clickY = mouseY;
    let ind = clickIndex(clickX, clickY);
    if (turn) {
      //To check if user clicked on an empty location
      if (board[ind] === -1) {
        board[ind] = 0;
        placeImage(ind, random(heartImages));
        // if (checkWin(board)[0])
        //   console.log("You never Win!");
        if (checkDraw(board)) {
          win = false;
          play = false; //Now user's clicks will have no effect for 250ms
          setTimeout(afterGame, 250);
        }
        turn = !turn;
      }
    }
  }
}

function mouseReleased() {
  if (!turn) {
    let tempBoard = minimax(board, 1)[1];
    for (let i = 0; i < tempBoard.length; i++) {
      if ((tempBoard[i] === 1) && (board[i] !== 1)) {
        placeImage(i, random(crossImages));
      }
    }
    board = tempBoard;
    let check = checkWin(board);
    if (check[0]) {
      drawLine(check[1]);
      win = true;
      play = false;
      setTimeout(afterGame, 500);
    }
    turn = !turn;
  }
}

function afterGame() {
  for (let i = 0; i < board.length; i++) {
    board[i] = -1;
  }
  gameEnd = true;
  background(255);
  strokeWeight(2);
  stroke(0);
  fill(0);
  textSize(100);
  textAlign(CENTER);
  if (win)
    text("BOT WINS!", 300, 250);
  else
    text("DRAW", 300, 250);
  textSize(20);
  noStroke();
  text("Click to restart", 300, 350);
  setTimeout(function() {
    play = true;
  }, 1000);
}

function drawLine(pos) {
  strokeWeight(6);
  stroke(0);
  if (pos === "r0")
    line(164, 157, 394, 157);
  if (pos === "r3")
    line(162, 252, 422, 252);
  if (pos === "r6")
    line(180, 340, 405, 340);
  if (pos === "c0")
    line(200, 112, 200, 380);
  if (pos === "c1")
    line(283, 108, 283, 388);
  if (pos === "c2")
    line(380, 112, 380, 380);
  if (pos === "md")
    line(167, 138, 423, 367);
  if (pos === "sd")
    line(173, 360, 410, 130);
}


//To check what index of the board has the user clicked!
function clickIndex(x, y) {
  if (x < 234 && y < 200)
    return 0
  if (x > 234 && x < 337 && y < 200)
    return 1;
  if (x > 337 && y < 200)
    return 2;
  if (x < 234 && y > 200 && y < 288)
    return 3;
  if (x > 234 && x < 337 && y > 200 && y < 288)
    return 4;
  if (x > 337 && y > 200 && y < 288)
    return 5;
  if (x < 234 && y > 288)
    return 6;
  if (x > 234 && x < 337 && y > 288)
    return 7;
  if (x > 337 && y > 288)
    return 8;
}

function placeImage(i, img) {
  if (i === 0)
    image(img, 184, 149);
  if (i === 1)
    image(img, 285, 141);
  if (i === 2)
    image(img, 394, 137);
  if (i === 3)
    image(img, 182, 248);
  if (i === 4)
    image(img, 286, 245);
  if (i === 5)
    image(img, 394, 244);
  if (i === 6)
    image(img, 184, 346);
  if (i === 7)
    image(img, 290, 346);
  if (i === 8)
    image(img, 394, 341);
}