let cells = [];
let celnum = 8;
let upbutton;
let downbutton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(80);
  upbutton = createButton('add');
  upbutton.position(width/4, height-20);
  upbutton.mousePressed(addit);
  upbutton = createButton('sub');
  upbutton.position(width- width/4, height-20);
  upbutton.mousePressed(subit);
  
  for (let i = 0; i < celnum; i++) {
    cells[i] = new Cell(random(400), random(400));
  
  }
  console.log(cells.length);
  //for (let q = 0; q < celnum; q++) {
 //   cells[q].display();
//  }

  //for (let k = 0; k < celnum; k++) {
  //  for (let l = 0; l < 2; l++) {
  //    cells[k].halfpoint(cells[l]);
   // }
 // }
}

function draw() {
  background(80);
  for (let q = 0; q < cells.length; q++) {
    
    cells[q].display();
    cells[q].move();
    cells[q].checkSide();
    for (let l = 0; l < cells.length; l++) {
      cells[q].linkto(cells[l]);
    }
  }
}

function addit(){
  cells.push(new Cell(random(400), random(400)));
  
}

function subit(){
  cells.pop();
}
