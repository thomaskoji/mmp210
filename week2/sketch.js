function setup() {
    
    
    noStroke();
    
    
    // main colors
    var jetBlack = color("#37342E");
    var metalic = color("#DBDBDB");
    var orange = color("#FFAF00");
    
    // canvas
    var canvasWidth = 1200;
    var canvasH = 800;
    
    // monitor
    var monitorX = 335;
    var monitorY = 200;
    var monitorW = 530;
    var monitorH = 320;
    var monitorCurve = 20;
    
    // monitor bottom(mb) part
    var mbX = monitorX;
    var mbY = monitorY + monitorH;
    var mbW = monitorW;
    var mbH = monitorH * 0.1875;
    
    // screen
    var screenX = monitorX + 25;
    var screenY = monitorY + 25;
    var screenFinalX = monitorW - 50;
    var screenFinalY = monitorH - 50;
    var screenColorR = 150;
    var screenColorG = 200;
    var screenColorB = 60;
    
    // monitor leg
    var monitorLeg1X = monitorX+monitorW*0.35;
    var monitorLeg1Y = monitorY+monitorH+monitorH*0.1875;
    var monitorLeg2X = monitorX+monitorW*0.65;
    var monitorLeg2Y = monitorY+monitorH+monitorH*0.1875;
    var monitorLeg3X = monitorX+monitorW*0.67;
    var monitorLeg3Y = monitorY+monitorH+(monitorH*0.1875)*1.6;
    var monitorLeg4X = monitorX+monitorW*0.33;
    var monitorLeg4Y = monitorY+monitorH+(monitorH*0.1875)*1.6;
    
    // monitor and leg's border
    var LineWidth = 5;
    
    // Logo
    var logo1X = monitorX + monitorW * 0.5;
    var logo1Y = monitorY + monitorH * 0.5;
    var logo1W = 50;
    var logo1H = 45;
    
    
    
    
    
    
    
    
    
    // canvas
    createCanvas(canvasWidth,canvasH);
    background(orange);
    
    // monitor top
    fill(jetBlack);
    rect(monitorX, monitorY, monitorW, monitorH, monitorCurve, monitorCurve, 0, 0);
    
    // monitor bottom
    fill(metalic);
    rect(mbX, mbY, mbW, mbH, 0, 0, monitorCurve, monitorCurve);
    
    // screen
    for (i = 0; i < screenFinalX; i++)
    {
        for (j = 0; j < screenFinalY; j++)   // ending point
        {
            stroke(screenColorR, screenColorG, j+screenColorB);
            point(i+screenX, j+screenY);    // starting point
        }
    }
    
    // monitor Leg
    fill(metalic);
    noStroke();
    beginShape();
        vertex(monitorLeg1X, monitorLeg1Y);
        vertex(monitorLeg2X, monitorLeg2Y);
        vertex(monitorLeg3X, monitorLeg3Y);
        vertex(monitorLeg4X, monitorLeg4Y);
    endShape(CLOSE);
    
    // monitor and leg's border
    strokeWeight(LineWidth);
    stroke(jetBlack);
    line(monitorLeg1X, monitorLeg1Y, monitorLeg2X, monitorLeg2Y);
    
    // Logo
    noStroke();
    fill(jetBlack);
    ellipse(logo1X, logo1Y, logo1W, logo1H);
    ellipse
    
    
    
    
    
    
    
}