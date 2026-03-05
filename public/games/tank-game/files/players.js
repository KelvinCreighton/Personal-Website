function drawPlayers() {
	for(var i = 0; i < players.length; i++) {
		
		players[i].xs1 = players[i].speed;
		players[i].xs2 = players[i].speed;
		players[i].ys1 = players[i].speed;
		players[i].ys2 = players[i].speed;
		
		
		if(players[i].num == 1) {
			if(button.d)
				players[i].a += (PI/180)*5;
			if(button.a)
				players[i].a -= (PI/180)*5;
		}
		if(players[i].num == 2) {
			if(button.right)
				players[i].a += (PI/180)*5;
			if(button.left)
				players[i].a -= (PI/180)*5;
		}
		if(players[i].num == 3) {
			if(button.semi)
				players[i].a += (PI/180)*5;
			if(button.k)
				players[i].a -= (PI/180)*5;
		}
		
		
		
		
		if(players[i].a > PI)
			players[i].a = -PI;
		if(players[i].a < -PI)
			players[i].a = PI;
			
		//console.log(players[i].a);
			
		for(var j = 0; j < rects.length; j++) {
			if(collideLineCircle(rects[j].x+2, rects[j].y+rects[j].h, rects[j].x+rects[j].w-4, rects[j].y+rects[j].h, players[i].x+canvasWidth/2, players[i].y+canvasHeight/2, gameSize*30)) {
				if(players[i].a >= -PI/2 && players[i].a <= PI/2)
					players[i].ys1 = 0;
				if(players[i].a >= PI/2 || players[i].a <= -PI/2)
					players[i].ys2 = 0;
			}
			if(collideLineCircle(rects[j].x+rects[j].w, rects[j].y+2, rects[j].x+rects[j].w, rects[j].y+rects[j].h-4, players[i].x+canvasWidth/2, players[i].y+canvasHeight/2, gameSize*30)) {
				if(players[i].a >= -PI && players[i].a <= 0)
					players[i].xs1 = 0;
				if(players[i].a >= 0 && players[i].a <= PI)
					players[i].xs2 = 0;
			}
			if(collideLineCircle(rects[j].x+2, rects[j].y, rects[j].x+rects[j].w-4, rects[j].y, players[i].x+canvasWidth/2, players[i].y+canvasHeight/2, gameSize*30)) {
				if(players[i].a >= PI/2 || players[i].a <= -PI/2)
					players[i].ys1 = 0;
				if(players[i].a >= -PI/2 && players[i].a <= PI/2)
					players[i].ys2 = 0;
			}
			if(collideLineCircle(rects[j].x, rects[j].y+2, rects[j].x, rects[j].y+rects[j].h-4, players[i].x+canvasWidth/2, players[i].y+canvasHeight/2, gameSize*30)) {
				if(players[i].a >= 0 && players[i].a <= PI)
					players[i].xs1 = 0;
				if(players[i].a >= -PI && players[i].a <= 0)
					players[i].xs2 = 0;
			}
		}

		
		
		if(players[i].num == 1) {
			if(button.w) {
				players[i].y -= cos(players[i].a)*players[i].ys1;
				players[i].x += sin(players[i].a)*players[i].xs1;
			}
			if(button.s) {
				players[i].y += cos(players[i].a)*players[i].ys2;
				players[i].x -= sin(players[i].a)*players[i].xs2;
			}
			if(button.space == true && button.spaceTimer == 0) {
				players[i].bulletCount++
				if(players[i].bulletCount > 5) {
					for(var j = 0; j < bullets.length; j++) {
						if(bullets[j].num == players[i].num) {
							bullets.splice(j, 1);
							if(bullets[i].type === "shot")
								bullets.splice(j, 2);
							players[i].bulletCount--
							break
						}
					}
				}
				bullets.push({
					num: players[i].num,
					timer: 0,
					x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
					y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
					xs: sin(players[i].a),
					ys: cos(players[i].a),
					type: players[i].power
				});
				if(players[i].power === "shot") {
					bullets.push({
						num: players[i].num,
						timer: 0,
						x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
						y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
						xs: sin(players[i].a+0.3),
						ys: cos(players[i].a+0.3),
						type: players[i].power
					});
					bullets.push({
						num: players[i].num,
						timer: 0,
						x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
						y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
						xs: sin(players[i].a-0.3),
						ys: cos(players[i].a-0.3),
						type: players[i].power
					});
				}
				button.spaceTimer = 10;
			}
		}
		
		if(players[i].num == 2) {
			if(button.up) {
				players[i].y -= cos(players[i].a)*players[i].ys1;
				players[i].x += sin(players[i].a)*players[i].xs1;
			}
			if(button.down) {
				players[i].y += cos(players[i].a)*players[i].ys2;
				players[i].x -= sin(players[i].a)*players[i].xs2;
			}
			if(button.enter == true && button.enterTimer == 0) {
				players[i].bulletCount++
				
				bullets.push({
					num: players[i].num,
					timer: 0,
					x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
					y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
					xs: sin(players[i].a),
					ys: cos(players[i].a),
					type: players[i].power
				});
				if(players[i].power === "shot") {
					bullets.push({
						num: players[i].num,
						timer: 0,
						x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
						y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
						xs: sin(players[i].a+0.3),
						ys: cos(players[i].a+0.3),
						type: players[i].power
					});
					bullets.push({
						num: players[i].num,
						timer: 0,
						x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
						y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
						xs: sin(players[i].a-0.3),
						ys: cos(players[i].a-0.3),
						type: players[i].power
					});
				}
				if(players[i].bulletCount > 5) {
					for(var j = 0; j < bullets.length; j++) {
						if(bullets[j].num == players[i].num) {
							bullets.splice(j, 1);
							if(bullets[i].type === "shot") 
								bullets.splice(j, 2);
							players[i].bulletCount--
							break
						}
					}
				}
				button.enterTimer = 10;
			}
		}
		
		if(players[i].num == 3) {
			if(button.o) {
				players[i].y -= cos(players[i].a)*players[i].ys1;
				players[i].x += sin(players[i].a)*players[i].xs1;
			}
			if(button.l) {
				players[i].y += cos(players[i].a)*players[i].ys2;
				players[i].x -= sin(players[i].a)*players[i].xs2;
			}
			if(button.slash == true && button.slashTimer == 0) {
				players[i].bulletCount++
				
				bullets.push({
					num: players[i].num,
					timer: 0,
					x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
					y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
					xs: sin(players[i].a),
					ys: cos(players[i].a),
					type: players[i].power
				});
				if(players[i].power === "shot") {
					bullets.push({
						num: players[i].num,
						timer: 0,
						x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
						y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
						xs: sin(players[i].a+0.3),
						ys: cos(players[i].a+0.3),
						type: players[i].power
					});
					bullets.push({
						num: players[i].num,
						timer: 0,
						x: canvasWidth/2+players[i].x+sin(players[i].a)*15,
						y: canvasHeight/2+players[i].y-cos(players[i].a)*15,
						xs: sin(players[i].a-0.3),
						ys: cos(players[i].a-0.3),
						type: players[i].power
					});
				}
				if(players[i].bulletCount > 5) {
					for(var j = 0; j < bullets.length; j++) {
						if(bullets[j].num == players[i].num) {
							bullets.splice(j, 1);
							if(bullets[i].type === "shot") 
								bullets.splice(j, 2);
							players[i].bulletCount--
							break
						}
					}
				}
				button.slashTimer = 10;
			}
		}

		
		push();
			//translate to player location to rotate from their perspective
			translate(canvasWidth/2+players[i].x, canvasHeight/2+players[i].y);
			rotate(players[i].a);
			//translate back
			translate(-players[i].x, -players[i].y);
			
			stroke(0);
			fill(players[i].r, players[i].g, players[i].b)
			rect(players[i].x-gameSize*10, players[i].y-gameSize*15, gameSize*20, gameSize*30);
			rect(players[i].x-gameSize*3, players[i].y-gameSize*20, gameSize*6, gameSize*15);
			ellipse(players[i].x, players[i].y, gameSize*15, gameSize*15);
		pop();
		
		
		
		//console.log(players[i].health);

		//if(i == 0)
			//document.getElementById("player1").innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Player 1 HP: " + players[i].health;
		if(players.length > 0) {
		if(players[i].power === "through" || players[i].power === "shot")
				players[i].powerTimer--
				
		if(players[i].powerTimer <= 0)
			players[i].power = "normal";
		}
			
		if(players[i].health == 0) {
			players.splice(i, 1);
		}
		
		if(players[i].num == 2)	
			console.log(players[i].bulletCount);
	}
}