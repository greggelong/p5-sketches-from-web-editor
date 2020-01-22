class Oword {
  
  constructor(name, atlist,x,y,color) { //def __init__(self,name,atlist):
    this.name = name; //self.name=name
    this.atlist = atlist; //self.atlist= atlist
    this.dc = 0; //self.dc = 0
    this.diflist = []; //self.diflist = []
    this.x = x;
    this.y = y;
    this.speedx = random(-2,2)
    this.speedy = random(-2,2)
    this.color = color;
    this.size = height/20





  }

  displayWA(){
    fill(this.color);
    textSize(this.size);
    text(this.name, this.x, this.y);
    for (let item in this.atlist){
      
      //console.log(this.atlist[item]);
      fill(random(255),random(255),random(255));
      text(this.atlist[item],this.x+random(-this.size*2,this.size*2),this.y+random(-this.size*2,this.size*2));
      
      
    }
  
  } 
    
  move(){
    this.x += this.speedx;
    this.y += this.speedy;
    if (this.x >= width-this.size || this.x <= 0){
      this.speedx = this.speedx *-1;
    }
    if (this.y >= height || this.y <=0){
      this.speedy = this.speedy *-1;
    }
   
    
    
    
    
  }
    
    }
    
