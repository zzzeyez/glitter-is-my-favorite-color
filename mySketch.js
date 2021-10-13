//let myShader;
//let glitter = 0.009;
//let black = 0.003;
//let glitter
//let black
var black = 0.004;
var glitter = 0.002;
let paused = 0;

//function preload() {
// a shader is composed of two parts, a vertex shader, and a fragment shader
// the vertex shader prepares the vertices and geometry to be drawn
// the fragment shader renders the actual pixel colors
// loadShader() is asynchronous so it needs to be in preload
// loadShader() first takes the filename of a vertex shader, and then a frag shader
// these file types are usually .vert and .frag, but you can actually use anything. .glsl is another common one
//myShader = loadShader("shader.vert", "shader.frag");
//}

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(10, 10, 10);
  smooth();
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
    stroke(random(50, 255), random(50, 255), random(50, 255), 80);
    //fill(random(220, 255), random(220, 255), random(220, 255), 120);
    fill(255, 255, 255, 200);
    ellipse(i * 2, noise(i * glitter, frameCount * 0.002 * 2) * height, 2, 2); // glitter
    stroke(0, 0, 0, 130);
    fill(255, 255, 255, 150);
    ellipse(i * 2, noise(i * black, frameCount * 0.002 * 2) * height, 2, 2); // blk
  }
}

function mouseClicked() {
  if (paused < 1) {
    noLoop();
    stop();
    paused = 1;
  } else {
    paused = 0;
    black = mouseX / 100000;
    glitter = mouseY / 100000;
    background(20, 20, 20);
    loop();
  }
}

function windowResized() {
  background(20, 20, 20);
  resizeCanvas(windowHeight, windowWidth);
}
