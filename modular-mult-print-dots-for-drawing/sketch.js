let radius = 200;
let x, y;
let total = 20;

function setup() {
  createCanvas(450, 450);
  background(255);
  stroke(2);
  angleMode(DEGREES);
  textSize(32);
}

function draw() {

  translate(width/2,height/2);
  noFill()
  ellipse(0,0,radius*2,radius*2);
  for(let i =0; i<total;i++){
   let a = map(i,0,total,0,360);
   
   x = cos(a) * radius;
   y = sin(a)* radius;
   fill(0);
   ellipse(x,y,10,10);
  
    
  }
  text(total,150,220);
  
  
  noLoop();
}