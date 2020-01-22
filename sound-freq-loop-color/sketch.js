let wave;
let mybutton;
let playing = false;
let freqslider;
let ffreq;

let szw;
let szh;


function setup() {
  if(windowWidth<windowHeight){
    createCanvas(windowWidth, windowWidth);
  }else{
    createCanvas(windowHeight,windowHeight);
  } 
  wave = new p5.Oscillator();
  wave.setType("sine");
  
  mybutton = createButton("on/off");
  mybutton.mousePressed(toggle);
  mybutton.position(width/4,100);
  freqslider = createSlider(20,1000,440);
  freqslider.input(chgfreq);
  freqslider.position(width/2,100);
  chgfreq();
  
  
}

function chgfreq(){
  
  ffreq= freqslider.value();
  //console.log(ffreq);
  wave.freq(ffreq); 
  szw = width/(freqslider.value()/15);
  szh = height/(freqslider.value()/15);
  
}


function toggle(){
  if(!playing){
   playing = true; 
   wave.start();
  wave.amp(0.5);
  
    
  }else{
   playing = false
    wave.stop();
    
  }
  
}


function draw() {
  
  if (playing){
       background(0,255,0);
     
  }else{
    
    background(255,0,0);
  }
  
  
  for (let y =0; y < height; y+=szh){
    
      for (let x = 0; x < width; x+=szw){
        if (playing){
          fill(random(255),random(255),random(255)); 
        }else{
          fill(random(255));
          
        }
        rect(x,y,szw,szh);
    
      }
  }
  
}






 