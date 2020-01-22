let x = 0;
let amplitude_slide;
let period_slide;
let scrolling=0; // scrolling in incremented outside of end shape


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
  stroke(255, 255, 0);
  strokeWeight(1);
  textSize(32);
  amplitude_slide = createSlider(10, height / 2, 100);
  amplitude_slide.position(32,100);
  period_slide = createSlider(1, 50, 1);
  period_slide.position(width-width/2,100);
  // createSlider(min, max, [value], [step])
}

function draw() {
  background(0);
  noFill();
  beginShape();
  for (let x = 0; x < width; x++) {

    let y = (amplitude_slide.value() * sin((x+scrolling ) * period_slide.value()) + height/2);  
    
    let cosy=(amplitude_slide.value() * cos((x+scrolling*2 ) * period_slide.value()) + height/2); 
    
    let tany=(amplitude_slide.value() * tan((x+scrolling*3 ) * period_slide.value()) + height/2); 
    stroke(0,0,255);
    fill(0,255,255);
    ellipse(x,cosy,5,5);
    fill(255,0,0);
    rect(x,tany,5,5);
    stroke(255,255,0);
    noFill();
    vertex(x, y);
  }
   
  endShape();
  scrolling+=1;

text(`Amplitude: ${amplitude_slide.value()}`, 32, 50);
text("Frequency: " + period_slide.value(), width - width / 2, 50);

}