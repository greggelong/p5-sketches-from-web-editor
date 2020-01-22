class ModMult {

  constructor(x, y, r, factor, total) {
    this.x = x; // x pos
    this.y = y; // y pos  
    this.r = r; // radius
    this.factor = factor; // multiplication factor 2 3 4 etc
    this.total = total; // total number of points for lines
  }

  drawIt() {
    
    push();  // needed to add push and pop for multiple instantiations.
    translate(this.x+this.r, this.y+this.r);
     
    stroke(255);
    noFill();
    ellipse(0, 0, this.r * 2); // draws a circle at origin


    //stroke(random(255),random(255),random(255),150);

    for (let i = 0; i < this.total; i++) {
      let ax = polar2cartX(i, this.total,this.r);
      let ay = polar2cartY(i, this.total, this.r);
      let bx = polar2cartX(i * this.factor, this.total, this.r);
      let by = polar2cartY(i * this.factor, this.total, this.r);
      stroke(0,255,0,150);
      line(ax, ay, bx, by);
      

    }
    pop();
    // functions for drawIt() method must be inside the method itself. also functions cannot have the this. stuff so you must pass them in arguments
    function polar2cartX(index, total, r) {
    let angle = map(index % total, 0, total, 0, TWO_PI); // get the angle as as circle divided by total points
    let x = r * cos(angle); // cah cosine = adg/hpy, trig function r is hypot
    return x;
  }

  function polar2cartY(index, total,r) {
    let angle = map(index % total, 0, total, 0, TWO_PI); // get the angle as as circle divided by total points
    let y = r * sin(angle); // soh sine=opp/hyp, trig function r is hypot
    return y;
  }

  }
  
}