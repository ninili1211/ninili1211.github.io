function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	//For (let BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (let x = 0; x < width; x += width / 10) {
		for (let y = 0; y < height; y += height / 5) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}

  cellWidth = width*0.75/18;
  cellHeight = height/19;
  coordinateX = 0;
  coordinateY = 0;
  if (cellWidth > cellHeight) {
    cellWidth = cellHeight;
  }
  else {
    cellHeight = cellWidth;
  }
  for (let i = 0; i < 18; i += cellWidth) {
    for (let j = 0; j < 18; j += cellHeight) {
      ellipse(coordinateX, coordinateY, 10, 10);
      console.log(i*cellWidth);
      console.log(j*cellHeight);
    }
  }
}