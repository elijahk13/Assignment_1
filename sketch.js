function setup() {
  createCanvas(500,500)
}

function draw() {
  arc(180,350,80,80,0,PI+QUARTER_PI, PIE);
  rect(10,50,75,100)
  line(180,350,180,175)
  line(10,100,85,100)
  line(47.5,50,47.5,150)
  triangle(250,125,298.3,70,350,125)
}