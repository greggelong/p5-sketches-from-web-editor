let cellmat = [];
let x, y;

// this was my solution for a function to make a 2d array it takes three arguments.

function twoDarr(xsize,ysize,data){
  let myarr =[];
  for(let i =0; i<xsize;i++){
    myarr[i] = [];
   for(let j=0; j<ysize;j++){
     myarr[i][j] = data;
   }
  }
  return myarr;
  
}

// shiffmans solution 

function make2Darray(cols,rows){
  let arr = new Array(cols);
  for (let i = 0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(400, 400);
  background(220);
  for (let i = 0; i < 20; i++) {
    cellmat[i] = []; // need to init the nested array unlike python
    for (let j = 0; j < 20; j++) {

      let state = int(random(255));

      cellmat[i][j] = state; 
    }
  }

  let eightbyeight = twoDarr(8,8,0);
  console.log(eightbyeight);
  
  let shiffman = make2Darray(8,10);
  console.log(shiffman);
}

function draw() {
  background(220);
  x = floor(map(mouseX, 0, width, 0, 19)); // maped mousex to grid
  let xg = constrain(x,0,19);  // constrained that variable to 19 so it would not 
  y = floor(map(mouseY,0,height,0,19));
 //console.log(x,xg,y);
  cellmat[xg][y] = color(255, 0, 0);
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      fill(cellmat[i][j]);
      rect(i * 20, j * 20, 20, 20);
    }
  }
}