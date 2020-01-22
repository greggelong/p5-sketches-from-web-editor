let n = 0; // number of seeds in the flower
let c = 10; // a multiplier

function setup() {
  if (windowWidth > windowHeight){
  createCanvas(windowHeight, windowHeight);
    
  }else{
    createCanvas(windowWidth,windowWidth);
    
  }
  background(0);
  colorMode(HSB,1000,100,100);
  
  
}

function draw() {
   translate(width/2,height/2);
  let phi = n*radians(137.5);
  let r = c*sqrt(n);
  let x = r * cos(phi);
  let y = r * sin(phi);
  fill(n,100,100);
  ellipse(x,y,20,20);
  if (x > width/2){
    print(n);
    background(0);
    n = 0;
  }
  n++
}