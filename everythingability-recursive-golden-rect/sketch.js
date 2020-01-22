// recusive golden rect elegant code suplied by /remarkability /everythingability


var phi = 1.61803398875; //Which is 13/8ish
//See : https://en.wikipedia.org/wiki/Golden_ratio

var img;
 
function setup(){
 createCanvas(1300, 803);
   
  
  print(width / phi);

  stroke(255);
  strokeWeight(4);
  noFill();
  translate(0,0);
  fs(width / phi);
}
 
//function mousePressed(){
 // saveCanvas("spiral.jpg");
  
//}
//function draw(){
   
  
//}
 
function fs( x){
  if (x<1) return;
  noFill()
  rect(0,0,x,x);
  fill(0, 100, 100, 50);
  noFill();
  stroke(255,255,0);
  arc(x,x,2*x,2*x,PI,PI+HALF_PI);
  rotate(HALF_PI);
  translate(0,-x-x/phi);
  fs(x/phi);
}
 