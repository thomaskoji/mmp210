function setup() {
    createCanvas(800,800);
    background('lightgray');
    fill("#f4ddc7");
    noStroke
    ellipse(100, 400, 50); //left ear
    ellipse(700, 400, 50); //right ear
    ellipse(400,400,600); //face
    fill('white');
    ellipse(310,380,180); //left eye
    ellipse(490,380,180); //right eye
    fill(100);
    ellipse(350,400,20); //left eye ball
    ellipse(450,400,20); //right eye ball
    noFill();
    arc(430, 600, 200, 50, HALF_PI, PI); //mouth
    strokeWeight(2);
    line(200, 300, 350, 260); //left eyebrows
    line(600, 300, 450, 260);//right eyebrows　
    strokeWeight(1);
    line(390, 500, 360, 550); //nose
    line(360, 550, 390, 560); //nose
    stroke("#262626");
    strokeWeight(4);
    fill("#404040");
    rect(350, 25, 100, 50, 10); //hat button
    rect(150, 50, 500, 170, 80, 80, 0, 0); //hat top
    rect(125, 180, 550, 40, 10);  //hat bottom
    stroke('black');
    strokeWeight(1);
    fill("#f4ddc7");
}