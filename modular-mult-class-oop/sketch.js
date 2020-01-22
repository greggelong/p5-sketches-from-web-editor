// let's make a class of modulo multiplications
// and fill the screen with objects


let sz;  // size var
let modCircles = [];

function setup() {
  if (windowWidth > windowHeight){
  createCanvas(windowHeight, windowHeight);
    
  }else{
    createCanvas(windowWidth,windowWidth);
    
  }
  background(0);
  //ellipseMode(CORNER);
  sz = width/5  // size as a fraction of width
  let r = sz/2;
  for (let i = 0; i<25;i++){
   modCircles[i] = new ModMult(width/4,height/2,r,i,100); 
    
  }
   
}


function draw(){
  background(0);
   let count = 0;
   for (let x = 0;x<width;x+=sz){
     for(let y=0;y<height;y+=sz){
     
     modCircles[count].x = x;
     modCircles[count].y = y;
     modCircles[count].total = floor(map(mouseX, 0, width, 10,200));
     modCircles[count].drawIt();
     count++
     
     }
   }
   // noLoop();
 }