function draw() {
  cellWidth = width/18;
  cellHeight = height/18;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }

  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      ellipse(x*cellWidth, y*cellHeight, 2, 2);
    }
  }
}