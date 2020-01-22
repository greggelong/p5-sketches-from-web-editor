
// changed the body background color in the style css file and the div only really affects the top


let cellmat = [];
let datamat = [];
//let binmat = [];
//let spritemat=[];
let x, y;
let mybutton
let mydisplay;
let showdiv;
let mycan;

// this was my solution for a function to make a 2d array it takes three arguments.

function twoDarr(xsize, ysize, data) {
  let myarr = [];
  for (let i = 0; i < xsize; i++) {
    myarr[i] = [];
    for (let j = 0; j < ysize; j++) {
      myarr[i][j] = data;
    }
  }
  return myarr;

}

function prtArr(arr) {
  // prints array to canvas

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      //fill(arr[i][j]);
      rect(i * 20, j * 20, 20, 20);
      // text(arr[i][j],i*20,j*20);

    }
  }
}


function setup() {
  showdiv = createDiv('***  Commodore Sprite Editor  *****');
  showdiv.style('background-color','#0039ff');
  showdiv.style('color','white');
  showdiv.style('font-size','20px');
  showdiv.style('text-align','center');

  // set up two 2d arrays one cellmat for checkboxes and one for data 
  cellmat = twoDarr(24, 21, 0);
  datamat = twoDarr(21, 24, 0);  // data mat is in y by x format wich will be easier to parse
  mybutton = createButton("click for data");
  mybutton.mousePressed(clickfordata);
  mybutton.parent(showdiv);
  mybutton.position(windowWidth-windowWidth/3,100);
  mybutton.parent(showdiv);
  mydisplay = createElement("textarea","data for sprite");
  mydisplay.attribute("rows","20");
  mydisplay.attribute("cols","50");                           
  mydisplay.parent(showdiv);
  mydisplay.position(windowWidth/10+600,200);
  // nested loop instantiating checkboxes and setting changed
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 21; j++) {
      cellmat[i][j] = createCheckbox();
      //cellmat[i][j].parent(showdiv);
      cellmat[i][j].position(i * 20+windowWidth/10, j * 20+windowHeight/10);
      
      // cellmat[i][j].changed(addtodata); maybe dont need this
    }
  }
  
  mycan = createCanvas(480,420);
  //mycan.parent(showdiv);
  mycan.background(0,255,0);
  mycan.position(windowWidth/10,420+windowHeight/10);
}


function clickfordata(){
  let binmat = [];
  let spritemat=[];
   
  // extract the data using parse int
  for (let j = 0; j < 21; j++) {    // for each y there is a line x
    let ln = datamat[j].join('');    // turn array  into a string of 24 
    let lst = ln.slice(-8);   // split that string into 3 groups of eight
    let md =ln.slice(8,16);
    let fst=ln.slice(0,8);
    binmat.push(fst,md,lst);  // push it into the binary mat
  }
  for (let b =0;b<binmat.length;b++){
    spritemat.push(parseInt(binmat[b],2));    // convert the binary into decimal using parseInt
    
  }
  console.log(binmat);
  console.log(spritemat);
  mydisplay.html("200 data "+spritemat.slice(0,12)+"\n220 data "+spritemat.slice(12,24)+"\n230 data "+spritemat.slice(24,36)+"\n240 data "+spritemat.slice(36,48)+"\n250 data "+spritemat.slice(48));
  //mydisplay.html("200 data "+spritemat.slice(13,26))
}

function draw() {

   for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 21; j++) {
      if (cellmat[i][j].checked()){
       fill(0);
      datamat[j][i] =1;
      }else{
        fill(0,0,255);
        datamat[j][i]=0;
      }
      rect(i * 20, j * 20, 20, 20);
            
       

    }
  }

}