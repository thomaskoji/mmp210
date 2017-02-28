function setup() {
	
//colors
	var black = color(51);
  	var white = color(245); 
    var red = color("#FF3636");
  
//canvas
	var canvasWidth = 600;
  	var canvasHeight = 200;
    createCanvas(canvasWidth,canvasHeight);
    background(white);
  
//text settings 
    var baseX = canvasWidth/2;
	var baseY = canvasHeight/2;
    var textsize = 100;
  	textAlign(CENTER,CENTER);
    noStroke();
	textFont("Helvetica");
	textSize(textsize);
  
//T
/*	var tX = baseX-183;
	var tY = baseY-8;
  	textSize(textsize);
	fill(black);
	text("T", tX, tY);*/
    
//filling for O	
	var fillingX = baseX-textsize*0.4;
	var fillingY = baseY;
  	var fillingRadius = textsize * 0.65;
    fill(black);
    ellipse(fillingX,fillingY,fillingRadius);
    
//HOMAS
	var homasX = baseX;
	var homasY = baseY;
	textSize(textsize);
    fill(black);
	text("THOMAS", homasX,homasY);
    
//koji
	var kojiX = fillingX + 2;
	var kojiY = fillingY - textsize*0.15;
	var kojiHeight = textsize*0.6;
	var kojiWidth = 1;
	var kojiTextsize = textsize * 0.3;
    fill(white);
    textSize(kojiTextsize);
    textLeading(kojiTextsize);
    text("弘 治", kojiX, kojiY,kojiWidth,kojiHeight);

//cover
	rectMode(CENTER); 
	//stroke(black); //uncomment to reveal the rectangle
	var coverX = homasX-textsize*2;
	var coverY = homasY;
	var coverHeight = textsize;
	var coverWidth = textsize;
	rect(coverX,coverY,coverWidth,coverHeight); // comment out the line to reveal the original T
    
//T
	var tX = 116.5;
	var tY = 100-15;
	fill(black);
	textSize(textsize);
	//text("T", tX, tY);
    
// the long bar atached on the right of T
    var barX = 300;
    var barY = 52;
    var barW = 430;
    var barH = 7.7;
    rect(barX, barY, barW, barH);
    
// the bar that is atached on the bottom of T
    var bar2X = 116.7;
    var bar2Y = 95;
    var bar2W = 9;
    var bar2H = 80;
    rect(bar2X, bar2Y, bar2W, bar2H);
    
//filling for A
    beginShape();
    vertex(412, 65);
    vertex(395, 110);
    vertex(430, 110);
    endShape(CLOSE);
    
    
} 