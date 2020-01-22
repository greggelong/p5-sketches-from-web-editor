class Carl {
  
 constructor(spacing){
   
   this.spacing = spacing;
   this.size = 110;
   
   this.x = width + this.spacing;
   console.log("space",spacing);
   
   this.y = random(this.size,height-this.size);
   this.xspeed = -2;
   
 }
  
  display(){
    fill(255,0,0);
    image(sagan, this.x,this.y, this.size,this.size);
    
    
  }
  
  move(){
    this.x += this.xspeed;
    if (this.x < -this.size){
      this.xspeed =int(random(2,3))*-1;
      this.x = width;
      this.size = int(random(110,150));
      this.y = random(this.size,height-this.size);
      
    }
  }
  
}