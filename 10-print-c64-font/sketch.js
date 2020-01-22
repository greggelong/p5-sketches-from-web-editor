// 10 print implementation in p5js
// font used is from http://style64.org/c64-truetype
// 



let greg;
let spacing;
let x = 0;
let y =0;
let myFont;

let ctext1 ='**** COMMODORE 64 BASIC V2 ****';
let ctext2 ='64K RAM SYSTEM 38911 BASIC BYTES FREE';

function preload() {
  myFont = loadFont('C64_Pro_Mono-STYLE-1.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  spacing = 20;
  background('#403DE2'); // picked from commodore 64 pic
  
}

function draw() {
  //background('#403DE2');
  fill('#A2A1FE');
  textFont(myFont);
  textSize(spacing);
  textAlign(CENTER);
  noStroke();
  text(ctext1,width/2,height/2);
  text(ctext2,width/2,(height/2)+2*spacing);
  greg = int(random(2))
  //console.log(x,y);
  stroke('#A2A1FE');
  strokeWeight(3);
  if (greg == 1) {
    translate(x,y)
    line(2, 2, spacing-2, spacing-2);
  } else {
    translate(x,y)
    line(2, spacing-2, spacing-2, 2);
  }
  x=x + spacing;
  if (x >= width){
    x = 0;
    y =y +spacing;
  }
  if (y >=height){
    x = 0;
    y = 0;
    background('#403DE2');
  }



}