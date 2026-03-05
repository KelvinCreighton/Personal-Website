function drawUpgrades() {
	for(var i = 0; i < upgrades.length; i++) {
		push();
			//translate to upgrades location to rotate from their perspective
			translate(canvasWidth/2+upgrades[i].x, canvasHeight/2+upgrades[i].y);
			rotate(upgrades[i].a);
			//translate back
			translate(-upgrades[i].x, -upgrades[i].y);
			stroke(100);
			fill(200);
			rect(upgrades[i].x-gameSize*10, upgrades[i].y-gameSize*10, gameSize*20, gameSize*20);
			
			stroke(0);
			if(upgrades[i].type == 0) {
				arc(upgrades[i].x, upgrades[i].y, gameSize*10, gameSize*10, 0, PI/2.5);
				arc(upgrades[i].x, upgrades[i].y, gameSize*10, gameSize*10, PI/1.75, PI);
				arc(upgrades[i].x, upgrades[i].y, gameSize*10, gameSize*10, -PI/1.5, -PI/4);
			}
			fill(0);
			if(upgrades[i].type == 1) {
				ellipse(upgrades[i].x+gameSize*2, upgrades[i].y+gameSize*3, gameSize*2, gameSize*2);
				ellipse(upgrades[i].x+gameSize*2, upgrades[i].y-gameSize*3, gameSize*2, gameSize*2);
				ellipse(upgrades[i].x-gameSize*2, upgrades[i].y, gameSize*2, gameSize*2);
			}
		pop();
		
		for(var j = 0; j < players.length; j++) {
			if(upgrades.length > 0) {
				if(collideCircleCircle(upgrades[i].x, upgrades[i].y, gameSize*20, players[j].x, players[j].y, gameSize*25)) {
					if(upgrades[i].type == 0) {
						players[j].power = "through";
						players[j].powerTimer = 300;
					}
					if(upgrades[i].type == 1) {
						players[j].power = "shot";
						players[j].powerTimer = 300;
					}
						
					upgrades.splice(i, 1);
					if(i > 0)
						i--
				}
			}
		}
	}
}