let textart;
let playinput;
let output;

// use bat tics for multi line strings
let secondFloor =`    
 
     
                   Second Floor                     
        ---------------------------------------     
     B  |               |b| |                  |F   
     a  | back bedroom  |c|f|   front bedroom  |r   
     c P|               | |c|                   o P 
     k o|------  -------------------  ---------|n o 
       r|                                      |  r 
     = c   kitchen      |Ba |   living rooom      c 
     = h|               |Ro |                  |  h 
     =  ---------------------------------------     
 

`
let firstFloor =`    
     
                    First Floor                    
        ---------------------------------------    
     B  |            ||||b| |                  |F  
     a  | back bedroom  |c|f|   front bedroom  |r  
     c P|               | |c|                  |o P
     k o|------  -------------------  ---------|n o 
       r|                                      |  r 
     = c   kitchen      |Ba |   living rooom      c 
     = h|               |Ro |                  |  h 
     =  ---------------------------------------     
    `

let basemet =`
     
                     Basement                 
       ---------------------------------------
     B | toilet|  furnace   ||||              |
     a |-------- -----------      work room   |
     c ||||                   |               |
     k |                      |---------------|
       |      front rooom                     |
       |                                      |
       |                                      |
        -------------------------------------- 
  `   

let yard =`
         
                            Yard                  
            -------------------------------------  |
         B  |      |         |                  |  |
         r  | shed |         |                  |p |
         i W|      |         |    concrete      |o | 
         c a|-------         |      patch       |r | 
         k l|      grass     |                  |c | 
           l|       patch    |              |||||h | 
            |                |                  |  _
            ------------------------------------- 
  `


let front =`
 ________________________
/_/_/_/_/_/_/_/_/_/_/_/_|
|^^^^^^^^^^^^^^^^^^^^^^||
|-----------------------|
| [ ] | |    | | [ ]   || 
|-----| |----| |------ ||
|+ + +| |+ + | | + + + ||
|______________________||
|^^^^^^^^^^^^^^^^^^^^^^||
|----------------------||
| [ ] | |    | | [ ]   || 
|-----| |----| |-------||
|+ + +| |+ + | | + + + || 
[][][][][][][][][][][][]]
[][][][][][][][][][][][]]
  `
function setup() {
  noCanvas();
  textart = select('#textart');
  playinput = select('#input');
  output = select('#output');
  playinput.changed(getaction)
  
   
  //text.html();

  }
 

function getaction(){
  
 textart.html(secondFloor);
 output.html('You are on the second floor kitchen')
  
  
  
  
}