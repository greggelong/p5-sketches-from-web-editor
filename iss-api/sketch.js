/* I had to use a differt api that can serve up https secure for use without a local server.  i am using whereisiss.at see their api instructions for */
let lineX =0;
let issX =0;
let issY =0;
let isscolor = 0;
let bg;
let latshow;
let longshow;

let url = 'http://api.open-notify.org/iss-now.json'
let url2 = 'http://api.open-notify.org/iss-now.json?callback=CALLBACK'
let url3 = 'https://api.wheretheiss.at/v1/satellites/25544'

function preload(){
  bg = loadImage('map2.png');
}


function setup() {
 
  createCanvas(1024, 720);
  background(bg);
  setInterval(askIss,1000); // will triger function askIss wich will load json file ever 1 second
  
  longshow = createElement('p','longitude');
  latshow = createElement('p','longitude');
  latshow.style('color','red');
  longshow.style('color','red');
  longshow.style('font-size', '18px');
  latshow.style('font-size', '18px');
  longshow.position(660,520);
  latshow.position(660,550);
 
}
  
function askIss(){
  loadJSON(url3,gotData); 
  isscolor=random(255);
  
}

function gotData(data){
  
  console.log(data);
  console.log(data.latitude,data.longitude);
  let lat = data.latitude;
  let long = data.longitude;
  issX= map(long,-180,180,0,width);
  issY= map(lat,-90,90,height,0);//because the south pole is -90 and nothpole is 90
  latshow.html('lat:  '+lat);
  longshow.html('long: '+long);
  
  
}

function draw() {
  //background(99, 107, 98);
  fill(isscolor, 10);
  ellipse(issX,issY,20,20);
  strokeWeight(1);
  stroke(38, 252, 5);
  //lineX += 5;
  //line(lineX,0,lineX,height);
 // if(lineX>width){
//lineX=0
 // }
}