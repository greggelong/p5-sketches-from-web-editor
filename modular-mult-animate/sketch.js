let total = 200;
let r;
let factor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height) {

    r = width / 2 - 16;
  } else {
    r = height / 2 - 16;
  }
}

function polar2cartX(index, total) {
  let angle = map(index % total, 0, total, 0, TWO_PI); // get the angle as as circle divided by total points
  let x = r * cos(angle); // cah cosine = adg/hpy, trig function r is hypot
  return x;
}

function polar2cartY(index, total) {
  let angle = map(index % total, 0, total, 0, TWO_PI); // get the angle as as circle divided by total points
  let y = r * sin(angle); // soh sine=opp/hyp, trig function r is hypot
  return y;
}




function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
  translate(width / 2, height / 2); // move origin to center
  textSize(50);
  text(floor(factor), r-30, r);
  
  //stroke(random(255),random(255),random(255),150);
  noFill();
  strokeWeight(2);
  ellipse(0, 0, r * 2); // draws a circle at origin
  for (let i = 0; i < total; i++) {
    let ax = polar2cartX(i, total);
    let ay = polar2cartY(i, total);
    let bx = polar2cartX(i * factor, total);
    let by = polar2cartY(i * factor, total);
    stroke(random(255), random(255), random(255), 150);
    line(ax, ay, bx, by);
  }

  factor = factor + 0.01;



}