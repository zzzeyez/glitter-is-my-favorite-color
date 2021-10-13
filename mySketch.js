//let glitter = 0.009;
//let black = 0.003;
//let glitter
//let black
let paused = 0;
var black = 0.004;
var glitter = 0.002;
//var black = random(0.001, 0.006);
//var glitter = random(0.001, 0.006);

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 10);
  smooth();
  //var black = random(0.001, 0.006);
  //var glitter = random(0.001, 0.006);
}

function draw() {
  //let black = mouseY / 100000;
  //let glitter = mouseX / 100000;
  //let r = random(1, 255);
  //let g = random(1, 255);
  //let b = random(1, 255);
  noStroke();
  fill(220, 220, 220, 0);
  rect(0, 0, width, height * 2);
  var x = 0;
  for (var i = -10; i < width + 100; i += 0.5) {
    stroke(random(0, 255), random(0, 255), random(0, 255), 50);
    //fill(random(220, 255), random(220, 255), random(220, 255), 120);
    fill(255, 255, 255, 150);
    ellipse(i * 2, noise(i * glitter, frameCount * 0.002 * 2) * height, 2, 2); // glitter
    stroke(0, 0, 0, 130);
    fill(255, 255, 255, 120);
    ellipse(i * 2, noise(i * black, frameCount * 0.002 * 2) * height, 2, 2); // blk
  }
}

//function mouseClicked() {
//if (paused < 1) {
//noLoop();
//stop();
//paused = 1;
//} else {
//paused = 0;
//black = mouseX / 100000;
//glitter = mouseY / 100000;
//background(10, 10, 10);
//loop();
//}
//}

function touchStarted() {
  if (paused < 1) {
    noLoop();
    stop();
    paused = 1;
  } else {
    paused = 0;
    //black = mouseX / 100000;
    //glitter = mouseY / 100000;
		black = mouseX / width / 90;
		glitter = mouseY / height / 90;
    background(10, 10, 10);
    loop();
  }
}

function windowResized() {
  background(20, 20, 20);
  resizeCanvas(windowHeight, windowWidth);
}
