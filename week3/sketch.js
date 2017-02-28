/*

Change canvasWidth to creat a bigger logo, every single variable is relative to the Canvas's width.

*/

function setup() {
	
//colors
	var black = color(51);
  	var white = color(245); 
    var red = color("#FF3636");
  
//canvas
	var canvasWidth = 900;
  	var canvasHeight = canvasWidth / 3;
    createCanvas(canvasWidth,canvasHeight);
    background(white);
    
//text settings etc
    var baseX = canvasWidth/2; // baseX and Y is always located in the middle. Setted so I can manipulate locations easier
	var baseY = canvasHeight/2;
    var textsize = canvasWidth/6;
  	textAlign(CENTER,CENTER);
    noStroke();
	textFont("Helvetica");
	textSize(textsize);
    
//filling for O	
	var fillingX = baseX-textsize*0.4;
	var fillingY = baseY;
  	var fillingRadius = textsize * 0.65;
    fill(black);
    ellipse(fillingX,fillingY,fillingRadius);
    
//filling for A
    var filling2X1 = textsize * 4.12;
    var filling2Y1 = baseY - textsize * 0.35;
    var filling2X2 = textsize * 3.96;
    var filling2Y2 = baseY + textsize * 0.1;
    var filling2X3 = textsize * 4.3;
    var filling2Y3 = baseY + textsize * 0.1;
    beginShape();
    beginShape();
    vertex(filling2X1, filling2Y1);
    vertex(filling2X2, filling2Y2);
    vertex(filling2X3, filling2Y3);
    endShape(CLOSE);
    
//HOMAS
	var homasX = baseX;
	var homasY = baseY;
	textSize(textsize);
    fill(black);
	text("THOMAS", homasX,homasY);
    
//koji. The chinese characters in O. It's my 2nd name.
	var kojiX = fillingX + 2;
	var kojiY = fillingY - textsize*0.15;
	var kojiHeight = textsize*0.6;
	var kojiWidth = 1;
	var kojiTextsize = textsize * 0.3;
    fill(white);
    textSize(kojiTextsize);
    textLeading(kojiTextsize);
    text("弘 治", kojiX, kojiY,kojiWidth,kojiHeight);

//cover. This covors the T of the Thomas. Kept it there and covered it so the "Thomas" whill be correctly centered
	rectMode(CENTER); 
	//stroke(black); //uncomment to reveal the rectangle
	var coverX = homasX-textsize*2;
	var coverY = homasY;
	var coverHeight = textsize;
	var coverWidth = textsize;
	rect(coverX,coverY,coverWidth,coverHeight); // comment out the line to reveal the original T
    
// the long bar atached on the right of T
    var barX = baseX;
    var barY = baseY - textsize * 0.48;
    var barW = textsize * 4.30;
    var barH = textsize * 0.077;
    fill(black);
    rect(barX, barY, barW, barH);
    
// the bar that is atached on the bottom of T
    var bar2X = textsize * 1.167;
    var bar2Y = baseY - textsize * 0.05;
    var bar2W = textsize * 0.09;
    var bar2H = textsize * 0.8;
    rect(bar2X, bar2Y, bar2W, bar2H);
    
} 