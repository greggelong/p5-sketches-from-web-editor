let y, cy,gy,ccy;
 
function setup() {
  createCanvas(600, 600);
  angleMode(degrees);
  background(0);
  strokeWeight(1);
  translate(width / 2, height / 2); // move to center
  
  textSize(32);
}

function draw() {
  translate(width / 2, height / 2);
  //stroke(random(255),random(255),random(255));
   stroke(0,255,0);
  
  
    let sx = -width/2
    let fx = width
    let sy = (sx *1)+0;   // first order equation
    let csy = sy*-1;
    let fy = (fx* 1)+0;
    let cfy = fy*-1;
    line(sx,csy,fx,cfy);
     
    
  
  
  stroke(255,0,0);
  line(0,-height/2,0,height);
  line(-width/2,0,width,0);
  
  
  
}