var mic;
function setup() {
  mic = new p5.AudioIn();
  mic.start();
  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let vol = mic.getLevel();
  fill(255,0,0);
  ellipse(width/2,height-height/4,width,vol*400);
  noStroke();
  
  ellipse(width/2,height/2,vol*600,vol*600);
  stroke(0);
  strokeWeight(vol*20);
  line(0,height-height/4,width,height-height/4);
  fill(0,0,255);
  rect(0,10,vol*700,50);
  rect(width-vol*700,10,width,50);
  
}