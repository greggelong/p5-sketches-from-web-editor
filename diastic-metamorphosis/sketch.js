// after refactoring the algorithm into python the problems with the p5 version became clear.  
// I must split the seed text into an array of words. this takes care of the spaces and the improbablility of finding a character a an index greater than the length of most words.
//  this requires that this requiers a third for loop looping the seed array.

// a good functioning algorithm also requires you to reset the the current word count to zero so you can cycle through the text.
// what to do about spaces in the seed text NoW spaces are eliminated.
// what to do about capitals in the seed text
// if the algorithm cannot create a diastic text for the whole seed text it just returns as much as it gets 

// if it doesnt find a mactch for a characater in the whole text it goes back to the last current word position where it found one. it only updates the current position of reading when it finds a match


// p5.js splitTolkens() will not work on large texts it will crash the browser, see the first iteration of this 
// there I use splitTolkens on the whole metamorph and boom!
// I followed Shiffman's coding challeng number #37

let srctxt;
let words;
let seed; //  text input box in html
let submitButton; // button in html
let radius = 50;
let x, y;
let total = 8;
let phrase;


function preload() {
  srctxt = loadStrings("metamorphSml.txt");
  console.log(typeof srctxt); // here returns object
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(173, 216, 230);
  stroke(3);
  angleMode(DEGREES);
  rectMode(CENTER);
  textSize(32);
 // noCanvas();
  srctxt = join(srctxt, ' '); // p5 split function not pure js returns a string
  // console.log(typeof srctxt) returns string
  //let srctxt2 = srctxt.join(' '); // pure js function also returns string
  words = splitTokens(srctxt, ' ",!.?;'); // p5 function takes a string and returns an array of strings split at those dilimiters
  console.log(srctxt, typeof srctxt, words, typeof words, words.length);
  seed = select("#seed");

  submitButton = select("#submit");
  submitButton.mousePressed(function() {
    let seedlist = seed.value().split(' ');
    console.log(seedlist)
    let phrase = diastic(seedlist, words);
    //let phrase = "bug";
    createP(phrase);
  }); //anonymous function inside mousePressed


}


function diastic(seed, words) {  // takes two arrays returns a string
  console.log("boom", words.length);

  var phrase = ""; // empty string to  fill with words.
  var currentWord = 0; // to keep track of where you are reading in the book.
  for (let s = 0; s< seed.length; s++){ // loop through the seed arrat
  
  for (let i = 0; i < seed[s].length; i++) { //loop through seed word
    let seedChar = seed[s].charAt(i);
    console.log(seedChar, i, currentWord);
    for (let j = currentWord; j < words.length; j++) {
      // loop through all the words and see to find
      //console.log("too", words[j], words[j].charAt(i))

      if (words[j].charAt(i) == seedChar) {
        phrase += words[j];
        phrase += " ";
        currentWord = j + 1; // keeps track of where we are in the text
        console.log(phrase);
        make_bug(phrase);
        if (currentWord >= words.length-10){  // wraps around when near the end
         currentWord = 0; 
        }
        break; // if found then break the loop


      }

    }

  }
    //currentWord =0;   // resets reading position after each word
  }
  return phrase;


}


function make_bug(phrase) {
  strokeWeight(2);
  stroke(0);
  let r=random(150);
  let g=random(150);
  let b=random(150);
  background(173, 216, 230);
  let legs = splitTokens(phrase, ' ",!.?;'); // p5 function takes a string and returns an array of strings split at those dilimiters
  print(legs.length)
  translate(width/2,height/3);
  noFill()
  ellipse(0,0,radius*2,radius*2);
  for(let i =0; i<legs.length;i++){
   let a = map(i,0,legs.length,0,360);
   
   x = cos(a) * radius;
   y = sin(a)* radius;
   fill(0);
   ellipse(x,y,10,10);
   
   push();
   translate(x*1.5,y*1.5)
   rotate(a); 
   fill(0);
   //rect(0,0,25,2);
   textSize(32-legs.length/2);
   fill(r*((i+1)/2), g*((i+1)/2), b*((i+1)/2));
   text(legs[i],0,0);
   console.log(i,legs[i]);
   pop(); 
  
    
  }
  text(legs.length,150,220);
  
  
 resetMatrix();
}