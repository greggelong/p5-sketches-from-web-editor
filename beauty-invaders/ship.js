function Ship(tempX, tempY, tempColor,tempSize) {
  this.x = tempX;
  this.y = tempY;
  this.color = tempColor;
  this.size = tempSize;


  this.display = function() {
    strokeWeight(3);
    stroke(0,255,0);
    fill(this.color);
    rect(mouseX, this.y, this.size, this.size);
  }
  
}  