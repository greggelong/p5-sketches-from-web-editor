// brightness mirror
// see notebook
// rea
let myvideo;

function setup() {
  createCanvas(320, 240); // dont confuse width and hieght with index that starts with zero height and width are total number
  pixelDensity(1);
  myvideo = createCapture(VIDEO);
  myvideo.size(320,240);  // video dom element below the canvas
  // the pixel index (x=5 y= 4) in a window that is 6 by 5 
  // use the formula (x+(y*width))*4  so (5+(4*6))*4 = 116
 // frameRate(10);
}
// had to move load and update out of the loop d

function draw() {
  background(255);
  myvideo.loadPixels(); // gets a pixes arry for video capture
  loadPixels();
  for (let y = 0; y < height; y++) { // for each y there are some x's
    for (let x = 0; x < width; x++) {
      let index = (x + (y * width)) * 4;
      let r = myvideo.pixels[index+0]; //set canvas rgb to capture video rbg
      let g =myvideo.pixels[index+1];
      let b =  myvideo.pixels[index+2];
      
      let bright = (r+g+b)/3 // the brightness or greyscale 0-255 is the average of the rgb
      
      pixels[index + 0] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
      pixels[index + 3] = 255;
      

    }

  }

updatePixels();


}