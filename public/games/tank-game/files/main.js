var canvas;
var canvasWidth = 600;	//max width
var canvasHeight = 420;	//max Height
var placeCanvas = true;
var maps;
var mapsAmount = 3;
var players;
var playerCount = 2;
var rects;
var upgrades;
var upgradeTimer = 0;
var bullets;
var bulletCount = 0;
var gameSize = 1;
var start = false;
var startTimer = 0;
var main = 1;
var click = false;
var scroll = 0;



var playerColour = {
	p1: "red",
	p2: "green",
	p3: "blue",
	p4: "yellow"
};



var colour = {
	red: true,
	green: true,
	blue: true,
	yellow: true
}

var button = {
	//player 1
	w: false,
	s: false,
	a: false,
	d: false,
	space: false,
	spaceTimer: 0,
	//player 2
	up: false,
	down: false,
	left: false,
	right: false,
	enter: false,
	enterTimer: 0,
	//player 3
	o: false,
	k: false,
	l: false,
	semi: false,
	slash: false,
	slashTimer: 0
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.which == 65)
		button.a = true;
	if(e.which == 87)
		button.w = true;
	if(e.which == 68)
		button.d = true;
	if(e.which == 83)
		button.s = true;
	if(e.which == 16)
		button.space = true;
	if(e.which == 37)
		button.left = true;
	if(e.which == 39)
		button.right = true;
	if(e.which == 38)
		button.up = true;
	if(e.which == 40)
		button.down = true;
	if(e.which == 13)
		button.enter = true;
	if(e.which == 79)
		button.o = true;
	if(e.which == 75)
		button.k = true;
	if(e.which == 76)
		button.l = true;
	if(e.which == 186 || e.key === ';')
		button.semi = true;
	if(e.which == 32)
		button.slash = true;
}

function keyUpHandler(e) {
	if(e.which == 65)
		button.a = false;
	if(e.which == 87)
		button.w = false;
	if(e.which == 68)
		button.d = false;
	if(e.which == 83)
		button.s = false;
	if(e.which == 16)
		button.space = false;
	if(e.which == 37)
		button.left = false;
	if(e.which == 39)
		button.right = false;
	if(e.which == 38)
		button.up = false;
	if(e.which == 40)
		button.down = false;
	if(e.which == 13)
		button.enter = false;
	if(e.which == 79)
		button.o = false;
	if(e.which == 75)
		button.k = false;
	if(e.which == 76)
		button.l = false;
	if(e.which == 186 || e.key === ';')
		button.semi = false;
	if(e.which == 32)
		button.slash = false;
}

function mouseClicked() {
	click = true;
}

function mouseWheel(e) {
	if(e.delta > 0)
		scroll = -1;
	if(e.delta < 0)
		scroll = 1;
}



function setup() {
	//reset
	players = [];
	rects = [];
	bullets = [];
	upgrades = [];
	
	upgradeTimer = 0;
	
	if(placeCanvas == true) {
		//canvas setup
		canvas = createCanvas(canvasWidth, canvasHeight);
		canvas.parent('canvas-holder');
		placeCanvas = false;
	}
	
	if(main == 0) {
		maps = floor(random(1/*mapsAmount-1*/, mapsAmount+1));
	} else {
		maps = 0;
	}
	//console.log(maps);
	drawMaps(maps);
	canvas.size(canvasWidth, canvasHeight);
	
	
	//canvas edges
	rects.push({
		x: 0,
		y: 0,
		w: canvasWidth,
		h: 3,
		s: false,
		f: 150
	});
	rects.push({
		x: 0,
		y: 0,
		w: 3,
		h: canvasHeight,
		s: false,
		f: 150
	});
	rects.push({
		x: 0,
		y: canvasHeight-3,
		w: canvasWidth,
		h: 3,
		s: false,
		f: 150
	});
	rects.push({
		x: canvasWidth-3,
		y: 0,
		w: 3,
		h: canvasHeight,
		s: false,
		f: 150
	});
	
	
	var red = 0, green = 0, blue = 0;
	for(var i = 0; i < playerCount; i++) {
		if(i == 0) {
			if(playerColour.p1 === "red") {
				red = 255;
				green = 0;
				blue = 0
			} else if(playerColour.p1 === "green") {
				red = 0;
				green = 255;
				blue = 0
			} else if(playerColour.p1 === "blue") {
				red = 0;
				green = 0;
				blue = 255;
			} else if(playerColour.p1 === "yellow") {
				red = 255;
				green = 255;
				blue = 0;
			}
		}
		if(i == 1) {
			if(playerColour.p2 === "red") {
				red = 255;
				green = 0;
				blue = 0
			} else if(playerColour.p2 === "green") {
				red = 0;
				green = 255;
				blue = 0
			} else if(playerColour.p2 === "blue") {
				red = 0;
				green = 0;
				blue = 255;
			} else if(playerColour.p2 === "yellow") {
				red = 255;
				green = 255;
				blue = 0;
			}
		}
		if(i == 2) {
			if(playerColour.p3 === "red") {
				red = 255;
				green = 0;
				blue = 0
			} else if(playerColour.p3 === "green") {
				red = 0;
				green = 255;
				blue = 0
			} else if(playerColour.p3 === "blue") {
				red = 0;
				green = 0;
				blue = 255;
			} else if(playerColour.p3 === "yellow") {
				red = 255;
				green = 255;
				blue = 0;
			}
		}
		if(i == 3) {
			if(playerColour.p4 === "red") {
				red = 255;
				green = 0;
				blue = 0
			} else if(playerColour.p4 === "green") {
				red = 0;
				green = 255;
				blue = 0
			} else if(playerColour.p4 === "blue") {
				red = 0;
				green = 0;
				blue = 255;
			} else if(playerColour.p4 === "yellow") {
				red = 255;
				green = 255;
				blue = 0;
			}
		}
		players.push({
			health: 5,
			num: i+1,
			speed: 1.75,
			x: 0,
			y: 0,
			a: 0,
			r: red,
			g: green,
			b: blue,
			power: "normal",
			bulletCount: 0,
			powerTimer: 0
		});
	}
	
	
	for(var i = 0; i < players.length; i++) {
		players[i].x = map(floor(random(1-round(((canvasWidth/60)/gameSize)/2), ((canvasWidth/60)/gameSize)-round(((canvasWidth/60)/gameSize)/2))), 1-round(((canvasWidth/60)/gameSize)/2), ((canvasWidth/60)/gameSize)-round(((canvasWidth/60)/gameSize)/2), -(halfWidth)+(30*gameSize), (halfWidth)-(30*gameSize));
		players[i].y = map(floor(random(1-round(((canvasHeight/60)/gameSize)/2), ((canvasHeight/60)/gameSize)-round(((canvasHeight/60)/gameSize)/2))), 1-round(((canvasHeight/60)/gameSize)/2), ((canvasHeight/60)/gameSize)-round(((canvasHeight/60)/gameSize)/2), -(halfHeight)+(30*gameSize), (halfHeight)-(30*gameSize));
		players[i].a = random(-PI, PI);
	}
	
	
	start = false;
}

function draw() {
	background(225);
	
	drawRects();
	if(main == 0) {
		drawBullets();
		drawUpgrades();
		drawPlayers();
		
		
		
		if(button.spaceTimer > 0)
			button.spaceTimer--
		if(button.enterTimer > 0)
			button.enterTimer--
		if(button.slashTimer > 0)
			button.slashTimer--
			
		if(players.length <= 1)
			startTimer++
		if(startTimer >= 250 || players.length <= 0 || (players.length <= 1 && bullets.length <= 0)) {
			for(var i = 0; i < players.length; i++) {
				console.log(players[i].num);
			}
			start = true;
			button.spaceTimer = 50;
			button.enterTimer = 50;
			main = 0;
			
			startTimer = 0;
		}
		
		if(start) {
			setup();
		}
		
		
			//upgrades
		if(upgradeTimer <= 0) {
			upgrades.push({
				x: map(floor(random(1-round(((canvasWidth/60)/gameSize)/2), ((canvasWidth/60)/gameSize)-round(((canvasWidth/60)/gameSize)/2))), 1-round(((canvasWidth/60)/gameSize)/2), ((canvasWidth/60)/gameSize)-round(((canvasWidth/60)/gameSize)/2), -(halfWidth)+(30*gameSize), (halfWidth)-(30*gameSize)),
				y: map(floor(random(1-round(((canvasHeight/60)/gameSize)/2), ((canvasHeight/60)/gameSize)-round(((canvasHeight/60)/gameSize)/2))), 1-round(((canvasHeight/60)/gameSize)/2), ((canvasHeight/60)/gameSize)-round(((canvasHeight/60)/gameSize)/2), -(halfHeight)+(30*gameSize), (halfHeight)-(30*gameSize)),
				a: random(-PI, PI),
				type: floor(random(0, 2))
			});
			upgradeTimer = 300;
		}
		upgradeTimer--
		
			//graph
		stroke(0);
		/*for(var i = 0; i < canvasWidth/10/gameSize; i++) {
			line(i*gameSize*60, 0, i*gameSize*60, canvasHeight);
		}
		for(var j = 0; j < canvasHeight/60/gameSize; j++) {
			line(0, j*gameSize*60, canvasWidth, j*gameSize*60);
		}*/
	} else if(main == 1) {
		noStroke();
		fill(0);
		textSize(50);
		if(mouseX >= canvasWidth/2-60 && mouseX <= canvasWidth/2+60 && mouseY >= canvasHeight/2-60 && mouseY <= canvasHeight/2+25) {
			textSize(60);
			if(click == true)
				main++
		}
		textAlign(CENTER);
		text("Play", canvasWidth/2, canvasHeight/2);
		
	} else if(main == 2) {
		noStroke();
		fill(0);
		textSize(40);
		textAlign(CENTER);
		if(mouseX >= canvasWidth/2-100 && mouseX <= canvasWidth/2+100 && mouseY >= canvasHeight/4*1-60 && mouseY <= canvasHeight/4*1+25) {
			textSize(50);
			if(click == true) {
				main = 0;
				playerCount = 2;
				setup();
			}
		}
		text("2 Players", canvasWidth/2, canvasHeight/4*1);
		
		
		textSize(40);
		if(mouseX >= canvasWidth/2-100 && mouseX <= canvasWidth/2+100 && mouseY >= canvasHeight/4*2-60 && mouseY <= canvasHeight/4*2+25) {
			textSize(50);
			if(click == true) {
				main = 0;
				playerCount = 3;
				setup();
			}
		}
		text("3 Players", canvasWidth/2, canvasHeight/4*2);
		
		
		/*textSize(40);
		if(mouseX >= canvasWidth/2-100 && mouseX <= canvasWidth/2+100 && mouseY >= canvasHeight/4*3-60 && mouseY <= canvasHeight/4*3+25) {
			textSize(50);
			if(click == true) {
				main = 0;
				playerCount = 4;
				setup();
			}
		}
		text("4 Players", canvasWidth/2, canvasHeight/4*3);*/	//4 players		this is here DO NOT FORGET!!!
		
		
	} /*else if(main == 3) {
			noStroke();
			fill(0);
			textAlign(CENTER);
		if(playerCount >= 2) {
			
			//if(mouseX >= canvasWidth/2-25-10 && mouseX <= canvasWidth/2-25+10 && mouseY >= canvasHeight/5*1+20-15 && mouseY <= canvasHeight/5*1+20+15)
				//colour.red1 += scroll;
				
			//text(colour.red1+" "+colour.green1+" "+colour.blue1, canvasWidth/2, canvasHeight/5*1+40);
			
			
			textSize(30);
			text("Player 1 Colour", canvasWidth/2, canvasHeight/5*1);
			textSize(20);
			if(colour.red == true) {
				if(mouseX >= canvasWidth/2-110-25 && mouseX <= canvasWidth/2-110+25 && mouseY >= canvasHeight/5*1+30-15 && mouseY <= canvasHeight/5*1+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "red";
						colour.red = false;
						colour.green = true;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("RED", canvasWidth/2-110, canvasHeight/5*1+40);
			}
			textSize(20);
			if(colour.green == true) {
				if(mouseX >= canvasWidth/2-45-40 && mouseX <= canvasWidth/2-45+50 && mouseY >= canvasHeight/5*1+30-15 && mouseY <= canvasHeight/5*1+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "green";
						colour.red = true;
						colour.green = false;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("GREEN", canvasWidth/2-45, canvasHeight/5*1+40);
			}
			textSize(20);
			if(colour.blue == true) {
				if(mouseX >= canvasWidth/2+30-20 && mouseX <= canvasWidth/2+30+40 && mouseY >= canvasHeight/5*1+30-15 && mouseY <= canvasHeight/5*1+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "blue";
						colour.red = true;
						colour.green = true;
						colour.blue = false;
						colour.yellow = true;
					}
				}
				text("BLUE", canvasWidth/2+30, canvasHeight/5*1+40);
			}
			textSize(20);
			if(colour.yellow == true) {
				if(mouseX >= canvasWidth/2+110-30 && mouseX <= canvasWidth/2+110+50 && mouseY >= canvasHeight/5*1+30-15 && mouseY <= canvasHeight/5*1+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "yellow";
						colour.red = true;
						colour.green = true;
						colour.blue = true;
						colour.yellow = false;
					}
				}
				text("YELLOW", canvasWidth/2+110, canvasHeight/5*1+40);
			}
			
			
			textSize(30)
			text("Player 2 Colour", canvasWidth/2, canvasHeight/5*2);
			textSize(20);
			if(colour.red == true) {
				if(mouseX >= canvasWidth/2-110-25 && mouseX <= canvasWidth/2-110+25 && mouseY >= canvasHeight/5*2+30-15 && mouseY <= canvasHeight/5*2+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "red";
						colour.red = false;
						colour.green = true;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("RED", canvasWidth/2-110, canvasHeight/5*2+40);
			}
			textSize(20);
			if(colour.green == true) {
				if(mouseX >= canvasWidth/2-45-40 && mouseX <= canvasWidth/2-45+50 && mouseY >= canvasHeight/5*2+30-15 && mouseY <= canvasHeight/5*2+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "green";
						colour.red = true;
						colour.green = false;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("GREEN", canvasWidth/2-45, canvasHeight/5*2+40);
			}
			textSize(20);
			if(colour.blue == true) {
				if(mouseX >= canvasWidth/2+30-20 && mouseX <= canvasWidth/2+30+40 && mouseY >= canvasHeight/5*2+30-15 && mouseY <= canvasHeight/5*2+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "blue";
						colour.red = true;
						colour.green = true;
						colour.blue = false;
						colour.yellow = true;
					}
				}
				text("BLUE", canvasWidth/2+30, canvasHeight/5*2+40);
			}
			textSize(20);
			if(colour.yellow == true) {
				if(mouseX >= canvasWidth/2+110-30 && mouseX <= canvasWidth/2+110+50 && mouseY >= canvasHeight/5*2+30-15 && mouseY <= canvasHeight/5*2+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "yellow";
						colour.red = true;
						colour.green = true;
						colour.blue = true;
						colour.yellow = false;
					}
				}
				text("YELLOW", canvasWidth/2+110, canvasHeight/5*2+40);
			}
		}
		if(playerCount >= 3) {
			textSize(30)
			text("Player 3 Colour", canvasWidth/2, canvasHeight/5*3);
			textSize(20);
			if(colour.red == true) {
				if(mouseX >= canvasWidth/2-110-25 && mouseX <= canvasWidth/2-110+25 && mouseY >= canvasHeight/5*3+30-15 && mouseY <= canvasHeight/5*3+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "red";
						colour.red = false;
						colour.green = true;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("RED", canvasWidth/2-110, canvasHeight/5*3+40);
			}
			textSize(20);
			if(colour.green == true) {
				if(mouseX >= canvasWidth/2-45-40 && mouseX <= canvasWidth/2-45+50 && mouseY >= canvasHeight/5*3+30-15 && mouseY <= canvasHeight/5*3+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "green";
						colour.red = true;
						colour.green = false;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("GREEN", canvasWidth/2-45, canvasHeight/5*3+40);
			}
			textSize(20);
			if(colour.blue == true) {
				if(mouseX >= canvasWidth/2+30-20 && mouseX <= canvasWidth/2+30+40 && mouseY >= canvasHeight/5*3+30-15 && mouseY <= canvasHeight/5*3+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "blue";
						colour.red = true;
						colour.green = true;
						colour.blue = false;
						colour.yellow = true;
					}
				}
				text("BLUE", canvasWidth/2+30, canvasHeight/5*3+40);
			}
			textSize(20);
			if(colour.yellow == true) {
				if(mouseX >= canvasWidth/2+110-30 && mouseX <= canvasWidth/2+110+50 && mouseY >= canvasHeight/5*3+30-15 && mouseY <= canvasHeight/5*3+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "yellow";
						colour.red = true;
						colour.green = true;
						colour.blue = true;
						colour.yellow = false;
					}
				}
				text("YELLOW", canvasWidth/2+110, canvasHeight/5*3+40);
			}
		}
		if(playerCount >= 4) {
			textSize(30)
			text("Player 4 Colour", canvasWidth/2, canvasHeight/5*4);
			textSize(20);
			if(colour.red == true) {
				if(mouseX >= canvasWidth/2-110-25 && mouseX <= canvasWidth/2-110+25 && mouseY >= canvasHeight/5*4+30-15 && mouseY <= canvasHeight/5*4+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "red";
						colour.red = false;
						colour.green = true;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("RED", canvasWidth/2-110, canvasHeight/5*4+40);
			}
			textSize(20);
			if(colour.green == true) {
				if(mouseX >= canvasWidth/2-45-40 && mouseX <= canvasWidth/2-45+50 && mouseY >= canvasHeight/5*4+30-15 && mouseY <= canvasHeight/5*4+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "green";
						colour.red = true;
						colour.green = false;
						colour.blue = true;
						colour.yellow = true;
					}
				}
				text("GREEN", canvasWidth/2-45, canvasHeight/5*4+40);
			}
			textSize(20);
			if(colour.blue == true) {
				if(mouseX >= canvasWidth/2+30-20 && mouseX <= canvasWidth/2+30+40 && mouseY >= canvasHeight/5*4+30-15 && mouseY <= canvasHeight/5*4+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "blue";
						colour.red = true;
						colour.green = true;
						colour.blue = false;
						colour.yellow = true;
					}
				}
				text("BLUE", canvasWidth/2+30, canvasHeight/5*4+40);
			}
			textSize(20);
			if(colour.yellow == true) {
				if(mouseX >= canvasWidth/2+110-30 && mouseX <= canvasWidth/2+110+50 && mouseY >= canvasHeight/5*4+30-15 && mouseY <= canvasHeight/5*4+30+15) {
					textSize(30);
					if(click == true) {
						playerColour.p1 = "yellow";
						colour.red = true;
						colour.green = true;
						colour.blue = true;
						colour.yellow = false;
					}
				}
				text("YELLOW", canvasWidth/2+110, canvasHeight/5*4+40);
			}
		}
	}*/
	click = false;
	scroll = 0;
}