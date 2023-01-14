function setup(){
    createCanvas(windowWidth, windowHeight);
  }
  function draw(){
    background(150);
    noStroke();
    for(let i = 0; i<14000; i++){
      rect(random(width), random(height), 2, 2);
    }
  }