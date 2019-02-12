var canvas;
var mic;
var t;

var elmnt = document.getElementById("content");
var scrollHoogte = elmnt.scrollHeight;
//var scrollBreedte = elmnt.scrollWidth;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, scrollHoogte);
}

function setup() {
  canvas = createCanvas(windowWidth, scrollHoogte);
  canvas.position(0, 0);
  //canvas.style('z-index',-1)
  t = 0;
  //canvas.style('z-index', '-1');
  // mic = new p5.AudioIn();
  // mic.start();
  //background(175);
}



function draw() {
  //background(255,5);

  /*var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 120, 120);
  t = t + 0.05;
  */

  ellipse(mouseX, mouseY, 120, 120);
}