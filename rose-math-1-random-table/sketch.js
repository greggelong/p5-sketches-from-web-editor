



 
let k;
let numerSlide;
let denomSlide;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  //numerSlide = createSlider(0,10,5,1);
  //denomSlide = createSlider(0,10,8,1);
  frameRate(5);
  
}

function draw() {
  background(0);
  stroke(0,255,0);
  translate(width/2,height/2);
  n = floor(random(1,7)); // get random whole number values for numerator 
  // n = numerSlide.value();
  d = floor(random(1,9)); // get random whole number values for denomenator 
  // d = denomSlide.value();
  k = n/d; //see wiki page for num denom graph
  textSize(40);
  text(k,200,200);
  for (let i = 0; i <360*d ; i+=0.5){   // it needs to loop around denomanator times
    let  r = width/2 * cos(k*i); // need to extend out the plot by a good measure
    let x = r*(cos(i));
    let y = r*(sin(i));
    point(x,y);
    
    
  }
}