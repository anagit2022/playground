//custom variables for y coordinate of sun & horizon
let sunHeight;
let horizon = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // set sky color - black for night and blue for day
  if(sunHeight < horizon){ 
    background('lightblue');
  } else {
    background(0);
  }

  //sun follows y-coordinate of mouse
  sunHeight = mouseY;
  console.log(sunHeight < horizon)

  //sun
  fill('yellow');
  circle(windowWidth/2, sunHeight, 100);

  //landscape
  if (sunHeight < horizon) {
    fill('lightgreen');
  } else {
    fill('green');
  }
  rect(0,horizon,windowWidth,windowHeight/2+30);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}