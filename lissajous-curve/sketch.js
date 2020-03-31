let xangle=0;
let yangle=0;
let sz;
let r;
let xball;
let yball;
let pointCan;
let myYslide;
let myXslide;
let incXang = 1; //
let incYang = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  textSize(20);
  // off-screen graphics buffer to draw the points to
  pointCan = createGraphics(windowWidth,windowHeight); 
  pointCan.clear() // set that background transparent
  myYslide = createSlider(1, 8, 2,1);
  myYslide.position(width/4, height-height/4);
  myYslide.changed(changeYang);
  myXslide = createSlider(1, 8, 1,1);
  myXslide.position(width-width/4, height-height/4);
  myXslide.changed(changeXang);
  sz = height/5
  r = sz/2
  xball = createVector(); // for the small balls tracing the
  yball = createVector(); // perimeter of the large circles
  // xball will be the x for the plot and yball will be the y for the plot
  
}

function changeYang(){
  // callback function for the slider
  incYang= myYslide.value();
  xangle=0; // resets both angles so they start 
  yangle=0; // at the same place
  pointCan.clear();    
}

function changeXang(){
  // callback function for the slider
  incXang= myXslide.value();
  xangle=0; // resets both angles so they start 
  yangle=0; // at the same place
  pointCan.clear();    
}

function draw() {
  background(0);
  noFill();
  strokeWeight(1);
  stroke(0,255,0);
  ellipse(width/2,sz,sz,sz);
  ellipse(sz,height/2,sz,sz);
  text(myYslide.value(),sz,height/2);
  text(myXslide.value(),width/2,sz);
  // polar coordinate math to get the small balls location
  xball.x = r*(cos(xangle));
  xball.y = r*(sin(xangle));
  yball.x = r*(cos(yangle));
  yball.y = r*(sin(yangle));
  stroke(255,0,0);
  // draw the lines and small balls
  ellipse(width/2+xball.x,sz+xball.y,10); // xball 
  line(width/2+xball.x,sz+xball.y,width/2+xball.x,height);
  ellipse(sz+yball.x,height/2+yball.y,10); // yball
  line(sz+yball.x,height/2+yball.y,width,height/2+yball.y);
  xangle+= incXang;// increace the angles so the balls
  yangle+= incYang;// move around the perimeter
  pointCan.strokeWeight(2);
  pointCan.stroke(255,140,0);
  pointCan.point(width/2+xball.x,height/2+yball.y);
  image(pointCan,0,0);
}