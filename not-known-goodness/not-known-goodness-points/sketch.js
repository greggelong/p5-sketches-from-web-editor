// can't seem to get it to work the way i want

let poff = 0.0;
let y



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  background(0);
  stroke(0, 255, 0);
  strokeWeight(1);
  noFill();
  //fill(0, 255, 0);
  //beginShape(LINES); // use lines not to get the shape
  


  for (let yoff = 0; yoff < height; yoff += 20) {

    for (let x = 0; x < width; x++) {
      if (x > width / 4 && x < width - width / 4) {
       
        //print(y);
        poff = poff + 0.01;
      } else {
        poff = poff +0.0001;
      }
      y = yoff + noise(poff) * 150;
      point(x, y);
    }
    
  //endShape();
  }
 // noLoop();
}