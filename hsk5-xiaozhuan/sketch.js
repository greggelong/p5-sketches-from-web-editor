
/*
had a problem getting the length of the java script file I actually had to chage the structure so it the whole array could have a key:value pair

see the question 
https://stackoverflow.com/questions/6756104/get-size-of-json-object
 I added the key "hsk1": to the array of objects then it had a .length property.

*/




let data;
let characters =[];
let pinyin = [];
let translations = [];
let showdiv;
let bigSeal;
let mycanvas;


function preload() {
  data = loadJSON("hsk-level-5.json");
  bigSeal = loadFont('HanYiCuZhuanFan-1.ttf');

}

function setup() {
  // create div
  showdiv = createDiv('HSK 5');
  showdiv.style('background-color','red');
  showdiv.style('color','white');
  showdiv.style('font-size','20px');
  showdiv.style('text-align','left');
  showdiv.style('padding','5%');

  // create canvas element set div as parent
  mycanvas = createCanvas(windowWidth,windowHeight);
  mycanvas.background(255,0);
  mycanvas.position(100,0);
  mycanvas.parent(showdiv);
  mycanvas.style('z-position','1');  // z-position 1 puts it on top
  mycanvas.style('position','fixed');  // such an easy fix with css fixed positioning see bookmarks
  mycanvas.hide();
  
  // set text for canvas not html
  textFont(bigSeal);
  textSize(height/6);
  textAlign(LEFT,CENTER); // must center x and y
  
  // read data from json with nested for loops add style and set listeners
  let vocab = data.hsk5; // change here
  // first loop character and pinyin
  for (let i =0; i< vocab.length ;i++) {
    characters[i] = createElement('h1',vocab[i].hanzi);
    pinyin[i] = createP(vocab[i].pinyin);
    characters[i].parent(showdiv);
    pinyin[i].parent(showdiv);
    pinyin[i].mouseOver(showptrans);
    pinyin[i].touchStarted(showptrans);
    pinyin[i].mouseOut(hideptrans);
    pinyin[i].touchEnded(hideptrans);
    characters[i].mouseOver(cfont);
    characters[i].mouseOut(bfont);
    
    // second and nested loop to get the translations, set style and add listeners
    let trans = vocab[i].translations;  // don't forget your index
    translations[i] = createP();//make a paragrah element to hold mutilple trans lations
    let contrans = " "; // make something to add each translation too
    for (let j=0; j< trans.length; j++) {
      contrans += trans[j]+" / ";
    }
    translations[i].html(contrans);
    translations[i].parent(showdiv);
    //translations[i].hide();
    translations[i].mouseOver(showptrans);
    translations[i].touchStarted(showptrans);
    translations[i].mouseOut(hideptrans);
    translations[i].touchEnded(hideptrans);
    
  }

}

/// functions to show and hide pinyin translations by changeing color
function showptrans(){
  this.style('color','white');
  
}

function hideptrans(){
  this.style('color', 'red');
}

/// functions for listerners to draw the big seal to the canvas

function cfont(){
   
  this.style('color','yellow');
  //this.html() returns the value of the of the character being touched
  mycanvas.show();
   
  text(this.html(),0,height/2);
  
}
function bfont(){
  this.style('font-family', 'Courier New');
  this.style('color','white');
  mycanvas.clear();
  mycanvas.hide();
  //mycanvas.background(255);
  
}

 