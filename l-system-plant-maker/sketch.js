// https://en.wikipedia.org/wiki/L-system
// X is ignored in drawing

let axiom = "X";
let delta = 25;
let rules = []; // put rules in an array so you can loop over them
rules[0] = {
  a: "X",
  
  b: "FX[--FX][FX][++FX]"
}

rules[1] = {
  a: "F",
  b:"FF"  

}


//console.log(rules);
let mysentence = axiom;
let mybutton;
let len;
let myinput;
let myrule;
let sentenceOut;

function setup() {
  createCanvas(windowWidth/2, windowHeight/1.5);
  background(0);
  angleMode(DEGREES);
  stroke(0, 255, 0,100);
  strokeWeight(2);
  //noCanvas();
  myinput = createInput("3");
  myrule = createInput("FX[--FX][FX][++FX]");
  mybutton = createButton("generate");
  mybutton.mousePressed(instructPrint);
  createP("The axiom is 'X'");
  createP("You can control the number of generations of the rule 1-7");
  createP("You are controling one rule  X => FX[--FX][FX][++FX]");
  createP("push '[', pop ']' and forward 'F', 'X' is not printed it just controls the curve");
  createP("the second rule F => FF, makes the tree have a longer trunk");
  createP("copy and paste this nice rule F+[[X]-X]-F[-FX]+X or refresh if you get stuck!");
  createP("******instructions for plant******");
  //translate(width/2,height);
  sentenceOut = createP(axiom);
  instructPrint();
  
}

function instructPrint(){
  //callback function for mousepressed button
  // constrain the values so it will not kill the browser
  rules[0].b = myrule.value();
  let genera = constrain(int(myinput.value()),1,7);
  //len = 8 -genera;  
  //len = 20
  len = map(genera,1,7,10,1);  // map the length to generations
  //console.log("length",len);
  let myinstructions = instruct(mysentence, genera);
 // console.log(mysentence,int(myinput.value()));
  turtle(myinstructions)
                                 
  
}



function instruct(sentence,number){
    let longSentence =""
    for(let i=0;i<number;i++){
        longSentence = generate(sentence)
        sentence = longSentence
    }
    return sentence
  
  
}



function generate(sentence) {
  //console.log("generate",sentence);
  
  //len *=0.618;
  let nextsentence = "";
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i); // get char in sentence
    let found = false; // a catch to see if it is found
    for (let j = 0; j < rules.length; j++) { // loop over the rules array
      if (current == rules[j].a) {
        nextsentence += rules[j].b
        found = true;
        break; // only one rule can be true at a time;
      }

    }
    if (!found) {
      nextsentence += current

    }
  }
  sentence = nextsentence // 
  sentenceOut.html(sentence);
  return sentence

}

function turtle(sentence) {
  background(0);
  resetMatrix(); // need to reset the matrix each time through
  translate(width/2,height);  // turtle origin
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i); // get char in sentence
    
    switch (current) {
      case "F":
        stroke(random(255),random(255), random(255));
        line(0, 0, 0, -len); // turtle starts by moving up from origin
        translate(0, -len); // trans to end of that line
        //console.log("boom")
        break;
      case "+":
        rotate(delta); //PI/6
        break;
      case "-":
        rotate(-delta); //PI/6
        break;
      case "[":
        push();
        break;
      case "]":
        pop(); 
        break;

    }

  }


}