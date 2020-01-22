function Invader(tempX, tempY, tempColor, tempSize) {
  this.x = tempX;
  this.y = tempY;
  this.color = tempColor;
  this.size = tempSize;
  this.speed = 1;
  //this.top = this.y-this.size/2    collision is checked with bullet object and only uses the invader x and y locataions
 // this.bottom = this.y+this.size/2
  //this.left = this.x-this.size/2
 // this.right=this.x+this.size/2


  this.display = function() {
    fill(this.color);
    strokeWeight(3);
    stroke(51);
    rect(this.x, this.y, this.size, this.size);
  }
  this.edges = function() {
    if (this.x > width) {
      //this.x = 0;   // if you want circular conection
      this.y = this.y + this.size;
      this.speed *= -1;
    } else if (this.x < 0) {
     // this.x = width;  // if you want circular connection
      this.y = this.y + this.size;
      this.speed *= -1;
    }

  }

  this.move = function() {
    this.x += this.speed;
  }
 // this.hit= function(bullet){
  // return !(this.left>bullet.right ||
  //          this.right<bullet.left ||
  //          this.top> bullet.bottom||
   //         this.bottom<bullet.top )
            
 // }
}