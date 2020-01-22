let ball1;
let vel1;
let score = 0;
let batsize = 100;
let ballsize = 50; // ball size variable need to add to show function and hit function
let trail = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(windowHeight/200);
  ball1 = createVector(200, 0); // vector holds an x and a y
  if (height < width) {
    vel1 = createVector(height / 800, height / 300); // vector holds a velocity
  } else {
    vel1 = createVector(width / 500, width / 100); // vector holds a velocity

  }
  rectMode(CENTER);
   colorMode(RGB,100);

}


function add_vel(ball, velocity) { // this function adds the velocity to a ball
  ball.add(velocity);
  let trailball = ball.copy();
  trail.unshift(trailball);

}

function show(ball) { // this function shows the ball on canvas
  
  for (let i = 0; i < trail.length; i++) {
    //print(i);
    fill(130-i,20);
     
    ellipse(trail[i].x, trail[i].y, ballsize+i*2, ballsize+i*2);
    if (trail.length > 100) {
      trail.pop(i);
    }

  }
  fill(255,0,0);
  ellipse(ball.x, ball.y, ballsize, ballsize);
}

function edges(ball, velocity) { // this function checks edges
  if (ball.x > width) {
    velocity.x *= -1;
  }
  if (ball.x < 0) {
    velocity.x *= -1;
  }
  if (ball.y > height) {
    velocity.y *= -1;
    score = 0;
    batsize = 100; // resets the batsize to 100
    ballsize = 50;
  }
  if (ball.y < 0) {
    velocity.y *= -1;
  }


}

function hit(ball, velocity) {
  //print(floor(ball.y+ballsize/2,height - height / 4);
  if (ball.y + ballsize / 2 > (height - height / 4) - 10 && ball.y + ballsize / 2 < (height - height / 4) + 5 && ball.x - ballsize / 2 < mouseX + batsize / 2 && ball.x + ballsize / 2 > mouseX - batsize / 2) { // need to check bat size /2
    velocity.y *= -1;
    score++;
    // print(floor(ball.y+ballsize/2),floor(height - height / 4 ));

    if (batsize > 20) { // 20 is the smallest bat size 
      batsize -= 5; // if more than 20 then take away 5
    }
    if (ballsize > 5) { // 5 is the smallest ball size 
      ballsize -= 5; // if more than 2 then take away 5
    }
  }

}

function draw() {
  background(0);
  fill(255);
  textSize(32);
  text(score, 20, 35);
  fill(255, 0, 0);
  add_vel(ball1, vel1); // calls function  but needs to pass variables
  edges(ball1, vel1); // calls function
  show(ball1); // calls function
  fill(0, 0, 255); // changes the color of the bat
  rect(mouseX, height - height / 4, batsize, 20); // batsize is the lenght
  hit(ball1, vel1); // calls function to check for hit


}