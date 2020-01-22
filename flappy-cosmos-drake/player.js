class Player {

  constructor() {
    this.x = width/4;
    
    this.size = 50;
    this.y = height-this.size;
    //console.log(height);
    this.yspeed = 0
    this.grav = 0.2;



  }

  display() {
   // fill(255, 0, 0); 
    image(greg,this.x, this.y, this.size,this.size);

  }
  
  jump() {
    this.yspeed = -5;
    //console.log('JUmp');
    
  }
  
  move() {
    this.y += this.yspeed;
    this.yspeed += this.grav; // force acts on acceleration
    this.y = constrain(this.y, 0, height-this.size);
    
  }
  
    




}