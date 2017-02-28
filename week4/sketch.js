// system variables
var ellipseWidth = 0;

function setup() {
    createCanvas(640, 480);
    x = 1;
    textSize(100);
}

function draw() {
    x++;
    background('white');
    ellipse(mouseX,mouseY,100,100);
    fill("lightblue");
    fill(frameCount, frameCount/2 ,frameCount/3);
    
    var shapeSize = 100;
    
    if (mouseX < width/2){
        rectMode(CENTER);
        rect(pmouseX,pmouseY, 50, 50);
    } else {
        fill("red");
        ellipse(pmouseX,pmouseY,50,50);
    }
    
    var ellipseWidth;
    if ( frameCount > width/2) {
        ellipseWidth = o;
    }else{
        ellipseWidth = frameCount;
    }
    ellipse(pmouseX, pmouseY, ellipseWidth,50);
}

// make the snake game

//p5 site ni ii sankou code ga aruyo wwww haHAA