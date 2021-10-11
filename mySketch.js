function setup() {
  frameRate(100);
  createCanvas(windowWidth, windowHeight);
  background(220,220,220);
  smooth();
}

function draw() {
  noStroke();
  fill(220,220,220,0);
  rect(0, 0, width, height);
  var x = 0;
  for (var i = -10; i < width + 10; i += 0.5) {
    stroke(10, 20, 60, 10);
    fill(255, 255, 255, 20);
    ellipse(i, noise(i * 0.004, frameCount * 0.002 * 2) * height, 2, 2); // ble
    stroke(230, 20, 30, 10);
    fill(255, 255, 255, 20);
    ellipse(i, noise(i * 0.008, frameCount * 0.002 * 2) * height, 2, 2); // red
  }
}

function mouseClicked() {
    background(220,220,220);
}
