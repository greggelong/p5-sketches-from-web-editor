function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.sx = width/90;
  this.sy = height/20; // making the size of the bullet depend on the window
   
  this.fire = function() {
    return true;
  }


  this.display = function() {
    strokeWeight(1);
    stroke(255, 0, 0);
    rect(this.x, this.y, this.sx, this.sy);

  }


  this.hit = function(invader) {
     
    if (this.x<invader.x+invader.size/2 &&  // half the invaders size
        this.x>invader.x-invader.size/2 &&
        this.y<invader.y  &&    // dont need to check above or below the y value this keeps the hits more real
        this.y<invader.y ){
      return true
    }else {
      return false
    }

  }
}