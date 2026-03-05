function drawBullets() {
	for(var i = 0; i < bullets.length; i++) {
		if(bullets[i].type === "normal" || bullets[i].type === "through" || bullets[i].type === "shot") {
			bullets[i].speed = 2.5;
			bullets[i].size = 5*gameSize;
			bullets[i].timer++
			
			noStroke();
			fill(0);
			ellipse(bullets[i].x, bullets[i].y, bullets[i].size, bullets[i].size);
		}
		
		bullets[i].x += bullets[i].xs*bullets[i].speed;
		bullets[i].y -= bullets[i].ys*bullets[i].speed;
		
		if(bullets[i].type !== "through") {
			for(var j = 0; j < rects.length; j++) {
				if(collideLineCircle(rects[j].x, rects[j].y+rects[j].h, rects[j].x+rects[j].w, rects[j].y+rects[j].h, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].ys *= -1;
				if(collideLineCircle(rects[j].x+rects[j].w, rects[j].y, rects[j].x+rects[j].w, rects[j].y+rects[j].h, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].xs *= -1;
				if(collideLineCircle(rects[j].x, rects[j].y, rects[j].x+rects[j].w, rects[j].y, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].ys *= -1;
				if(collideLineCircle(rects[j].x, rects[j].y, rects[j].x, rects[j].y+rects[j].h, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].xs *= -1;
			}
		} else if(bullets[i].type === "through") {
			if(collideLineCircle(0, 0, canvasWidth, 0, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].ys *= -1;
				if(collideLineCircle(0, 0, 0, canvasHeight, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].xs *= -1;
				if(collideLineCircle(0, canvasHeight, canvasWidth, canvasHeight, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].ys *= -1;
				if(collideLineCircle(canvasWidth, 0, canvasWidth, canvasHeight, bullets[i].x, bullets[i].y, bullets[i].size))
					bullets[i].xs *= -1;
		}		
		
		
		
		
		for(var j = 0; j < players.length; j++) {
			if(bullets.length > 0) {
				if(collideCircleCircle(bullets[i].x, bullets[i].y, bullets[i].size, canvasWidth/2+players[j].x, canvasHeight/2+players[j].y, gameSize*25)) {
						for(var k = 0; k < players.length; k++) {
							if(bullets[i].num == players[k].num)
								players[k].bulletCount--
						}
					
					players[j].health--
					bullets.splice(i, 1);
					
					if(i > 0)
						i--
				}
			}
			if(bullets.length > 0) {
				if((bullets[i].timer >= 300 && bullets[i].type !== "through") || bullets[i].timer >= 600) {
					for(var k = 0; k < players.length; k++) {
							if(bullets[i].num == players[k].num)
								players[k].bulletCount--
						}
					bullets.splice(i, 1);
					if(i > 0)
						i--
				}
			}
		}
	}
}