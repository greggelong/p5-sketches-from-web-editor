class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.position = createVector(this.x,this.y);
    this.velocity = createVector(random(5,10),random(5,10));
    //console.log(this.velocity);

  }

  display() {
    strokeWeight(1);
    fill(255, 0, 0);
    ellipse(this.position.x, this.position.y, 20, 20);

  }

  move() {
    this.position.add(this.velocity);
    
  }
  
  checkSide(){
    if (this.position.x < 0 || this.position.x >width) {
      this.velocity.x *= -1;
    }
    if (this.position.y<0 || this.position.y >height){
      this.velocity.y *= -1;
    }
    }
    
  
  linkto(other){
   strokeWeight(2);
   stroke(random(255),random(255),random(255));
   line(this.position.x,this.position.y, other.position.x,other.position.y);
  }
     



}


