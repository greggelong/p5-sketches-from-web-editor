xoff = 0;
scroll = 0;


function setup() {
  createCanvas(windowHeight, windowWidth);
  //stroke(120);
  noStroke();
  background(0);

}

function draw() {
  background(0);
  xoff = scroll;
  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), 0, 1, height/4, height-height/4);  // gets a value for y from list of perlin noise numbers
    noStroke();
    fill(155,255,130);
    rect(x, y, 10, height);
    xoff += 0.01;

  }
  if (mouseX<width/4){
   scroll-=0.01;      // move to the left
  }
  else if (mouseX>width-width/4){
  scroll += 0.01;    // move to the right
  }
  stroke(255,0,0);
  line(width/4,0,width/4,height); // draws a line on the left
  line(width-width/4,0,width-width/4,height);  // draws a line on the right
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,75,20);  // the body of UFO
  ellipse(mouseX,mouseY-10,20,20); // the top of the UFO
  //print(scroll);
  //noLoop();
}