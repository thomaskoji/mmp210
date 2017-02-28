// system variables

function setup() {
    createCanvas(1000, 1000);
    textSize(100);
}

function draw() {
    background('white');

    
    
    
// Grids
    var lineX1 = 0 ;
    var lineY1 = 10;
    var lineX2 = width;
    var lineY2 = lineY1;
    
    while (lineY1 < height) {
        line(lineX1, lineY1, lineX2, lineY2);
        lineY1 += 10;
        lineY2 += 10;
    }
    
    var lineX1 = 10 ;
    var lineY1 = 0;
    var lineX2 = lineX1;
    var lineY2 = height;
    
    while (lineX1 < width) {
        line(lineX1, lineY1, lineX2, lineY2);
        lineX1 += 10;
        lineX2 += 10;
    }
    
//user's sname
    fill('black');
    rect(mouseX,mouseY,10,10);
    rect(490,490,10,10);
    rect(480,480,10,10);
    rect(470,470,10,10);
    rect(460,460,10,10);
    
    
    
}


//p5 site ni ii sankou code ga aruyo wwww haHAA