/* I changed the frameRate() so when I call the frame count it will be slower

I still add images to the array with the snap function.  I did not put it in the draw loop. this has the advantage of keeping the array smaller and only adding intentionally and keeping the image always dynamic
*/
let myvideo; // to make a references to the dom element so I can manuplate it
let mybutton;
let snapshots = [];


function setup() {
  createCanvas(800, 160*3);
  background(244);

  myvideo = createCapture(VIDEO); // this video capture is manipulable as an image in p5 library
  myvideo.size(320, 240);
  //myvideo.hide();  // hides the dom element which is a video capture
  mybutton = createButton("snap");
  mybutton.mousePressed(takesnap);
}


function takesnap() {

  // image(myvideo,0,0); 
  myvideo.loadPixels();   // now it seems we need to load pixels before using get unlike the daniel's video
  snapshots.push(myvideo.get());
  console.log(snapshots);
  frameRate(5);

}

function draw() {
  background(220);
  //tint(255,0,200);// maniuplating the video
  //image(myvideo,0,0); // manipu
  let x= 0;
  let y= 0;
  let w= 200
  let h=160
  for (let i = 0; i < snapshots.length; i++) {

    //tint(255,50);
    //console.log("boop");
    let index = (i+frameCount)%snapshots.length;
    image(snapshots[index], x, y,w,h);
    x=x+w;
    if(x >= 600){
      x=0;
      y=y+h;
    }
  }
}