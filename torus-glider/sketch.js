// lets try and make this a torus  make it toroidal
// modulo this time

let cellmat = [];
let generation = 0;
let cellsize = 25;
let sbutton;
let active = false
let stepbutton;
let backbutton;
let gendisplay;
let img;
 
function preload() {
  img = loadImage('gregL7.jpg');
}

/* here we can see that drawing the cells with only width size does perserve the squareness but it does not fit all the cells on the screen
 if the screen is not not square all the cells wont fit
 you also must change the display of the cells in the cell class to  rect(this.x, this.y, width / cellsize, width /cellsize);
*/


function setup() {

  let scrnszX = windowWidth
  let scrnszY = windowHeight
  if (scrnszX <= scrnszY) {
    createCanvas(scrnszX-50, scrnszX-50);
    //console.log("Xsize"); set the width as square
  } else {
    createCanvas(scrnszY-50, scrnszY-50);
    //console.log("YSize"); set the as square

  }

  frameRate(25);
  sbutton = createButton("generate");
  stepbutton = createButton("step forward");
  backbutton = createButton("step back");
  sbutton.mousePressed(toggleGenerate);
  sbutton.position(width / 2, height);
  stepbutton.mousePressed(stepgen);
  backbutton.mousePressed(backgen);
  stepbutton.position(width - width / 4, height);
  backbutton.position(width/4,height);
  gendisplay =createElement('h2', str(generation));
  gendisplay.position(20,height-20);
  
  background(70);
  for (let i = 0; i < cellsize; i++) {
    cellmat[i] = []; // need to init the nested array unlike python
    for (let j = 0; j < cellsize; j++) {

      let state = 0;

      cellmat[i][j] = new Cell(i * width / cellsize, j * width / cellsize, state);
      // console.log(i, j, state);
    }
  }
 
  
  // any cell needs state newstate and statelist or it wont work
  cellmat[2][4].state=1;
  cellmat[3][4].state=1;
  cellmat[4][4].state=1;
  cellmat[4][3].state=1;
  cellmat[3][2].state=1;
  cellmat[2][4].newstate=1;
  cellmat[3][4].newstate=1;
  cellmat[4][4].newstate=1;
  cellmat[4][3].newstate=1;
  cellmat[3][2].newstate=1; 
  
  // there is a state list that needs the initial state logged generation 0 statelist[generation]= state an
  cellmat[2][4].statelist[0]= 1;
  cellmat[3][4].statelist[0]= 1;
  cellmat[4][4].statelist[0]= 1;
  cellmat[4][3].statelist[0]= 1;
  cellmat[3][2].statelist[0]= 1;


}



function draw() {
  // display console.log(generation, cellmat[30][30].statelist)
  for (let i = 0; i < cellsize; i++) {
    for (let j = 0; j < cellsize; j++) {
    
      if (cellmat[i][j].statelist[generation-1] !=cellmat[i][j].state){
      cellmat[i][j].display(); // only display if the state has changed
      // display generation
     // fill(0, 0, 255);
     // stroke(0, 255, 0);
      //textSize(50);
     // text(generation, 50, 50);
        gendisplay.html(str(generation));
    }
    }    
  }
  // if active is true generate new and increace generation
  if (active) {
    generate();
    generation++
  }

}

function toggleGenerate() {
  if (!active) {
    active = true;
    sbutton.html("pause");
  } else {
    active = false;
    sbutton.html("generate");

  }
}

function stepgen() {

  generate();
  generation++
}


function backgen() {
  if (generation >0){
  generation--
  // subtract a generation
  for (let i = 0; i < cellsize - 1; i++) {
    for (let j = 0; j < cellsize - 1; j++) {

      cellmat[i][j].statelist.pop();
      cellmat[i][j].state = cellmat[i][j].statelist[generation];
      cellmat[i][j].newstate = cellmat[i][j].state;
      cellmat[i][j].display();
      // pop the last one off this list list gets shorter by one
      // set the now state to the previous state
      // set the newstate to to the now state
      // then directly display* do not generate just display
    }
  }
  }
}

function generate() {
  
  // get the neighbors for each cell and call the rules from the cell function
  // increace  generation  in step and draw functions not here
  // here we need to set four conditions to make it toroidal
 
  for (let i = 0; i <= cellsize-1 ; i++) {
    for (let j = 0; j <= cellsize-1 ; j++) {
      let neighbors = countNeighbors(cellmat,i,j);
      
    
   /*  
     if (i == 0 && j ==0){
         neighbors = cellmat[cellsize-1][cellsize- 1].state + cellmat[i][cellsize- 1].state + cellmat[i + 1][cellsize - 1].state + cellmat[cellsize-1][j].state + cellmat[i + 1][j].state + cellmat[cellsize-1][j + 1].state + cellmat[i][j + 1].state + cellmat[i + 1][j + 1].state;
        print("both zero",cellsize);
        */
      
      
      
   cellmat[i][j].generate(neighbors);
      // generate all the neighbors then swap state

    }

      
  }
  for (let i = 0; i <= cellsize - 1; i++) {
    for (let j = 0; j <= cellsize - 1; j++) {

      cellmat[i][j].swapstate();
    }
  }



}



function countNeighbors(grid, x,y){
  let sum =0;
  for (let ni =-1; ni<2;ni++){
      
    for(let nj=-1; nj<2;nj++){
       sum +=  grid[(ni+x+cellsize)%cellsize][(nj+y+cellsize)%cellsize].state;
          
        }
      }
  sum -= grid[x][y].state
  
  return sum
}