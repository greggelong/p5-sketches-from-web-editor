let elephant;
let listOfThings =[];



function setup() {
  createCanvas(windowWidth, windowHeight);
  elephant = new Oword("elephant", ["large", "mammal"], 200, 200, color(200, 200, 200));
  turtle = new Oword("turtle", ["small"], 300, 300, color(0, 200, 200));
  dog = new Oword("dog", ["small", "mammal"], 500, 200, color(200, 0, 200));
  cat = new Oword("cat", ["small", "mammal",], 200, 500, color(200, 200, 0));
  
  listOfThings = [cat,turtle,elephant,dog];



}

function draw() {
  background(128);
  for( let item in listOfThings){
    
  listOfThings[item].displayWA();
  listOfThings[item].move();
  }
}