let n = 10;  // if odd numerator is number of petals, if even numerator is 2x petals
let d = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(2);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(0, 255, 0);
  strokeWeight(1);
  noFill();
  
  beginShape();
  for (let i = 0; i < 360; i++) {
    let k = i * d;
    let r =width/2 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);

  }
  endShape();
  
  stroke(255,0,0);
  strokeWeight(2);
  for (let i = 0; i < 360; i+=0.1) {
    let k = i;
    let r =width/2 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    point(x, y);
  }
  d=d+1;
}