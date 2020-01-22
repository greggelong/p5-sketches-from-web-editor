let player1;
let value;
let greg;
let carls = [];
let bkgd;
let sagan;
let drake = [];
let fc;
let rstr, pstr, nstr, lstr, istr, cstr, lCivstr , p, e, l, i, c, lCiv, numDeCiv;
let deq;
let explan;
// lets add a second cactus


function preload() {
  greg = loadImage('gregL7.png');
  bkgd = loadImage('milky-way.jpg');
  sagan = loadImage('sagan.png');
  fc = loadImage('fc.png');
}

function setup() {
  
  
  p=0.80;
  e=0.5;
  l=0.01;
  i=0.01;
  c=0.50;
  L=100;
  numDeCiv = 7*(p)*e*(l)*(i)*(c)*L;
  console.log(numDeCiv);
 
  
  rstr = `


    N = the number of civilizations in our galaxy with which communication might be possible 

    R∗ = the average rate of star formation in our galaxy

    fp = the fraction of those stars that have planets

    ne = the average number of planets that can potentially support life per star that has planets

    fl = the fraction of planets that could support life that actually develop life at some point

    fi = the fraction of planets with life that actually go on to develop intelligent life (civilizations)

    fc = the fraction of civilizations that develop a technology that releases 
       detectable signs of their existence into space

    L = the length of time for which such civilizations release detectable signals into space
 `;
  
  
  //player1 = new Player; if you call the constructure befre seting the canvas size the hieght in constructure will defalt to 100 irritateing runtime error
  createCanvas(windowWidth, windowHeight);
  player1 = new Player();
  let spacing = 0;
  for (let i = 0; i < 2; i++) {

    carls[i] = new Carl(spacing);
    spacing += width / 2;
  }
  console.log(carls);
  deq = createElement('h1', 'N = R∗ · f p · n e · f l · f i · f c · L');
   
  
  explan = createElement('pre');
  deq.position(width/3,height/10);
  deq.style("color", "#FFFF00")
  deqn = createElement('h2', `${numDeCiv.toFixed(3)} = 7∗ · ${p} · ${e} · ${l} · ${i} · ${c} · ${L}`); // toFixed keeps to that decimal place
  deqn.position(width/3,height/5);
  deqn.style("color", "#FF0000")
  explan.html(rstr);
  explan.position(20,height/4);
  explan.style("color", "#a1ff00");
  explan.style("font-family", "monospace");
  //explan.style("background-color", "#FF0000");
  
  explan.style("font-size","14pt");
  explan.style("padding", "10px")
  explan.hide();
  

}

function draw() {
  background(bkgd);
  deq.mouseOut(hideExplain);
    

  player1.display();
  player1.move(); // has gravity and constraint in the class
  
  for (let i = 0; i < 2; i++) {
    carls[i].display();
    carls[i].move();
  }

  deq.mouseOver(explain)
  
}

function keyPressed() {
  if (key == ' ' && player1.y) {
    player1.jump()

  }
}

function mousePressed() {
  
    player1.jump()


}

function explain(){
  
  explan.show();
  
}

function hideExplain(){
  
  explan.hide();
  
}