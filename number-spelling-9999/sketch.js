let mybutton;
let nynum = 0;
let mybutton2;
let myinput;
let upto_nineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixten', 'seventeen', 'eighteen', 'nineteen']
 
let by_ten = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
 
let mag = ['', '', '', 'hundred', 'thousand']



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 140, 255);
  mybutton = createButton("Press to get a number");
  mybutton.position(width / 2, height / 6);
  mybutton.mousePressed(getNum);
  mybutton2 = createButton("Press to get big a number");
  mybutton2.position(width / 4, height / 6);
  mybutton2.mousePressed(getBigNum);
   
   
  console.log(spellIt(200));  // need to fix this
  myinput = createInput("1");
  myinput.position(width/4,height/6+40)
  myinput.changed(enterNum);



}

function getNum() {
  background(0, 140, 255);
  mynum = floor(random(99));
  textSize(200);
  text(mynum, width / 2, height / 2);
  stringnum = spellIt(mynum);
  textSize(50);
  text(stringnum, width / 4, height - (height / 4));
   
}

 function enterNum() {
  background(0, 140, 255);
  mynum = int(myinput.value());
  console.log(mynum);
  textSize(200);
  text(mynum, width / 2, height / 2);
  stringnum = spellIt(mynum);
  textSize(50);
  text(stringnum, width / 4, height - (height / 4));
   
} 





function getBigNum() {
  background(0, 140, 255);
  mynum = floor(random(100, 9999));
  textSize(200);
  text(mynum, width / 2, height / 2);
  stringnum = spellIt(mynum);
  textSize(50);
  text(stringnum, 30, height - (height / 4));




}


function spellIt(number) {
  console.log("the number is", number);
  let snumb = str(number);
  let spellnum = "";
  console.log("this is it", snumb.length);
  while (snumb.length > 0) {

    if (snumb.length == 4) { //if (number > 999) {   
      spellnum = spellnum + upto_nineteen[int(snumb[0])] + " thousand "
      snumb = snumb.slice(1); //takes off the thousands
      
      if (int(snumb)===0){
         snumb = "";
      }
      else if (int(snumb)<100){     // if there is not hundreds takes it off for cases like 9046
        snumb=snumb.slice(1);  // otherwise it would say zero hundred
      }
      


    }
    else if (snumb.length == 3) { //if (number <= 999 & number >99) {
      spellnum = spellnum + upto_nineteen[int(snumb[0])] + " hundred"
      snumb = snumb.slice(1); //takes off the hundreds
          if (int(snumb) === 0){
           console.log("that's all folks");
           break;
          }else{
            spellnum =spellnum + " and "
    }
      
    }

    else if (int(snumb) >= 20) { //if (number >= 20 & number <=99) {
      spellnum = spellnum + by_ten[int(snumb[0])]; // gets the number for the tens place 
      if (int(snumb[1]) != 0) { // if not zero like 20 30 40 etc add hiphen
        spellnum = spellnum + "-";
        spellnum = spellnum + upto_nineteen[int(snumb[1])]; // add the ones
        snumb = ""; // make the length of snumb = 0
        break;

      }else{
        snumb = "";
        break;
      }
    }

    else if (int(snumb) < 20) { //(number < 20) {
      spellnum = spellnum + upto_nineteen[int(snumb)];
      snumb = ""; // make the length of snumb = 0
      console.log("small");


    }

  }
  console.log('that is it', snumb.length);
  return spellnum
}