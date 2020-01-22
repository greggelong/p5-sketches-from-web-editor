 // this version detects the collision
 // using a boolian function in bullet that takes an invader as a parameter



 let greg;
 let mj;
 let fire = false;
 let angela;
 let invadArr = [];

 let alive = true;


 function setup() {
   createCanvas(windowWidth, windowHeight);
   greg = new Ship(width / 2, height - (height / 10), color(255, 0, 0), height / 10);
   mj = new Bullet(width / 2, height / 2);

   for (let i = 0; i < 100; i++) {
     invadArr[i] = new Invader(i, height / 20, color(random(255), random(255), random(255)), random(height / 80, height / 10));
     invadArr[i].speed = random(0.5, 4);

   }

   rectMode(CENTER);

 }




 function draw() {
    
   if (alive === true)  {
     background(220);
     //console.log(invadArr.length);
     if (invadArr.length == 0) { //  adds a new bach of invaders
       for (let i = 0; i < 100; i++) {
         invadArr[i] = new Invader((i), height / 20, color(random(255), random(255), random(255)), random(height / 80, height / 10));
         invadArr[i].speed = random(0.5, 4);
       }
     }
     for (let i = 0; i < invadArr.length; i++) {
       invadArr[i].display();

       invadArr[i].move();
       invadArr[i].edges();
       if (invadArr[i].y > height) {
         alive = false;
       }

     }
     greg.display();
     if (fire === true) { // displays the bullet if fired
       mj.y = mj.y - 10;
       mj.display();

       for (let i = 0; i < invadArr.length; i++) {

         if (mj.hit(invadArr[i]) === true) {
           //console.log('bang');
           fire = false;
           invadArr.splice(i, 1); // javascript splice index num of elements
         }
         if (mj.y < 0) {
           fire = false;
         }
       }
     }



   }
   else{
     
     textAlign(CENTER);
     textSize(width/20);
     stroke(0,255,0);
     fill(255,0,0);
     text("GAME OVER:",width/2,height/2);
     text("refresh this tab to play again",width/2,height/2+width/20);
   }

 }




 function mousePressed() {
   if (mouseButton === LEFT && fire === false) {
     //console.log('fire');
     mj.x = mouseX;
     mj.y = greg.y;
     fire = true;
   }
 }