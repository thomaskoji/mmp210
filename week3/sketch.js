function setup() {
	
//colors
	var black = color(51);
  	var white = color(245); 
  
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
  
//HOMAS
	var homasX = baseX;
	var homasY = baseY;
	textSize(textsize);
    fill(black);
	text("THOMAS", homasX,homasY);
    
    
//filling for O	
	var fillingX = baseX-textsize*0.4;
	var fillingY = baseY;
  	var fillingRadius = textsize * 0.65;
    fill(black);
    ellipse(fillingX,fillingY,fillingRadius);
	
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
	rect(coverX,coverY,coverWidth,coverHeight);
    
//T
	var tX = 100;
	var tY = 100;
	var tTextsize = textsize * 1.2; //something wrong with textsize. supposed to be
	fill(black); //100 here. probably happend because the koji.
	textSize = tTextsize;
	text("T", tX, tY);

    /*
        NO HARD CODED VALUE
    */	
} 