function setup() {
    
    
    noStroke();
    
    
    // main colors
    var jetBlack = color("#37342E");
    var metalic = color("#DBDBDB");
    var orange = color("#FFAF00");
    var white = color("#E7E7E7");
    
    // canvas
    var canvasWidth = 1200;
    var canvasH = 800;
    
    // monitor
    var monitorX = 135;
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
    
    var logoLeaf1X = logo1X + (logo1W * 0.1);
    var logoLeaf1Y = logo1Y - (logo1H * 0.65);
    var logoLeaf1W = logo1H * 0.3;
    var logoLeaf1H = logo1W * 0.3;
    var logoLeafStart1 = HALF_PI + QUARTER_PI;
    var logoLeafEnd1 = PI + HALF_PI;
    
    var logoLeaf2X = logo1X;
    var logoLeaf2Y = logo1Y - (logo1H * 0.708);
    var logoLeaf2W = logo1H * 0.3;
    var logoLeaf2H = logo1W * 0.3;
    var logoLeafStart2 = PI + HALF_PI + QUARTER_PI;
    var logoLeafEnd2 = HALF_PI;
    
    // Logo bottom
    var logo2X = monitorX + monitorW * 0.5;
    var logo2Y = monitorY + monitorH * 1.11;
    var logo2W = 30;
    var logo2H = 26;
    
    var logo2Leaf1X = logo2X + (logo2W * 0.1);
    var logo2Leaf1Y = logo2Y - (logo2H * 0.65);
    var logo2Leaf1W = logo2H * 0.3;
    var logo2Leaf1H = logo2W * 0.3;
    var logo2LeafStart1 = HALF_PI + QUARTER_PI;
    var logo2LeafEnd1 = PI + HALF_PI;
    
    var logo2Leaf2X = logo2X;
    var logo2Leaf2Y = logo2Y - (logo2H * 0.708);
    var logo2Leaf2W = logo2H * 0.3;
    var logo2Leaf2H = logo2W * 0.3;
    var logo2LeafStart2 = PI + HALF_PI + QUARTER_PI;
    var logo2LeafEnd2 = HALF_PI;
    
    // text
    var textX = monitorX + monitorW + 50;
    var textY = monitorY + monitorH * 0.3;
    var textW = canvasWidth - textX;
    var textH = canvasH - textY;
    
    
    
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
    
    // Logo screen
    noStroke();
    fill(white);
    ellipse(logo1X, logo1Y, logo1W, logo1H);
    arc(logoLeaf1X, logoLeaf1Y, logoLeaf1W, logoLeaf1H, logoLeafStart1, logoLeafEnd1, OPEN);
    arc(logoLeaf2X, logoLeaf2Y, logoLeaf2W, logoLeaf2H, logoLeafStart2, logoLeafEnd2, OPEN);
    
    // Bottom logo
    fill(jetBlack);
    ellipse(logo2X, logo2Y, logo2W, logo2H);
    arc(logo2Leaf1X, logo2Leaf1Y, logo2Leaf1W, logo2Leaf1H, logo2LeafStart1, logo2LeafEnd1, OPEN);
    arc(logo2Leaf2X, logo2Leaf2Y, logo2Leaf2W, logo2Leaf2H, logo2LeafStart2, logo2LeafEnd2, OPEN);
    
    // text
    textSize(80);
    textAlign(CENTER, TOP);
    text("New eMac  from 4000$", textX, textY, textW, textH);
}