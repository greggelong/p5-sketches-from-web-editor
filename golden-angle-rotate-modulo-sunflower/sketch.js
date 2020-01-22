let r=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
}

function draw() {
   
  translate(width/2,height/2);
  rotate(radians(r));
  //rotate(r);
   stroke(0,0,255);
  fill(frameCount%255,150,0);  // changing the color r of rgb with frameCount%255
  ellipse(frameCount%width/2,0,random(10,50),random(10,20));  // changing the size and shape of the circle with random()
  //r=r+sqrt(2);
  //r=r+1.618;
  r=r+137.5;
  //r=r+0.618;
         
}