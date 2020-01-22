let srctxt;
let message;

function preload() {
  srctxt = loadStrings("arecibo1.txt");
  
  
  console.log(srctxt); // here returns object
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  srctxt = join(srctxt, '\n');
  message = srctxt.split('\n');
  console.log(message);
  console.log(srctxt);
  textAlign(CENTER);
  textSize(24);
  background(0);
  fill(0,255,0);
  text(srctxt,width/2,0)
  console.log(typeof srctxt,typeof message,message.length, message[0].length);
}

function draw(){
  background(0);
  fill(0,255,0);
  y = map(mouseY,0,height,height,-height*3);
  text(srctxt,width/2,y)
  
  
  
  
}


