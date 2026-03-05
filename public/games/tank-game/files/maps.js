var halfWidth = canvasWidth/2;
var halfHeight = canvasHeight/2;

function drawMaps(mapNum) {
	if(mapNum == 1) {
		//setup
		canvasWidth = 600;
		canvasHeight = 420;
		gameSize = 1/2;
		
		//lines
		rects.push({x: 30, y: 30, w: 7, h: 60, s: false, f: 1});
		rects.push({x: 30, y: 30, w: 60, h: 7, s: false, f: 1});
		rects.push({x: 120, y: 30, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-90, y: 30, w: 60, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-30, y: 30, w: 7, h: 180, s: false, f: 1});
		rects.push({x: 60, y: 60, w: 120, h: 7, s: false, f: 1});
		rects.push({x: 150, y: 60, w: 7, h: 150, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: 60, w: 150, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-90, y: 60, w: 7, h: 30, s: false, f: 1});
		rects.push({x: 240, y: 90, w: 150, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: 90, w: 7, h: 180, s: false, f: 1});
		rects.push({x: canvasWidth-90, y: 90, w: 30, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-60, y: 90, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 210, y: 120, w: 7, h: 60, s: false, f: 1});
		rects.push({x: 210, y: 120, w: 60, h: 7, s: false, f: 1});
		rects.push({x: 270, y: 120, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-270, y: 120, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-270, y: 120,	w: 60, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-210, y: 120, w: 7, h: 60, s: false, f: 1});
		rects.push({x: canvasWidth-150, y: 120, w: 60, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-90, y: 120, w: 7, h: 210, s: false, f: 1});
		rects.push({x: 30, y: 150, w: 30, h: 7, s: false, f: 1});
		rects.push({x: 90, y: 150, w: 30, h: 7, s: false, f: 1});
		rects.push({x: 180, y: 150, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 210, y: 180, w: 30, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: 180, w: 30+7, h: 7, s: false, f: 1});
		rects.push({x: 0, y: canvasHeight/2, w: 30, h: 7, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight/2, w: 30, h: 7, s: false, f: 1});
		rects.push({x: 120, y: canvasHeight/2, w: 30+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-150, y: canvasHeight/2, w: 7, h: 120, s: false, f: 1});
		rects.push({x: canvasWidth-150, y: canvasHeight/2, w: 30, h: 7, s: false, f: 1});
		rects.push({x: 120, y: canvasHeight-180, w: 7, h: 60, s: false, f: 1});
		rects.push({x: 210, y: canvasHeight-180, w: 7, h: 60, s: false, f: 1});
		rects.push({x: 210, y: canvasHeight-180, w: 30, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: canvasHeight-180, w: 30, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-210, y: canvasHeight-180, w: 7, h: 60, s: false, f: 1});
		rects.push({x: canvasWidth-60, y: canvasHeight-180, w: 7, h: 120, s: false, f: 1});
		rects.push({x: canvasWidth-60, y: canvasHeight-180, w: 60, h: 7, s: false, f: 1});
		rects.push({x: 270, y: canvasHeight-150, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-270, y: canvasHeight-150, w: 7, h: 30, s: false, f: 1});
		rects.push({x: 30, y: canvasHeight-120, w: 90+7, h: 7, s: false, f: 1});
		rects.push({x: 210, y: canvasHeight-120, w: 60+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-270, y: canvasHeight-120, w: 60+7, h: 7, s: false, f: 1});
		rects.push({x: 30, y: canvasHeight-90, w: 7, h: 60, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight-90, w: 7, h: 30, s: false, f: 1});
		rects.push({x: 120, y: canvasHeight-90, w: 30, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: canvasHeight-90, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: canvasHeight-90, w: 30+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-120, y: canvasHeight-90, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-120, y: canvasHeight-90, w: 30+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-30, y: canvasHeight-90, w: 7, h: 60, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight-60, w: 30, h: 7, s: false, f: 1});
		rects.push({x: 180, y: canvasHeight-60, w: 240+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-150, y: canvasHeight-60, w: 7, h: 30, s: false, f: 1});
		rects.push({x: 30, y: canvasHeight-30, w: 60, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: canvasHeight-30, w: 30+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-120, y: canvasHeight-30, w: 7, h: 30, s: false, f: 1});
		rects.push({x: canvasWidth-90, y: canvasHeight-30, w: 60+7, h: 7, s: false, f: 1});
	}
	
	if(mapNum == 2) {
		//setup
		canvasWidth = 600;
		canvasHeight = 420;
		gameSize = 1;
		
		//lines
		rects.push({x: 60, y: 60, w: 7, h: 180, s: false, f: 1});
		rects.push({x: 120, y: 60, w: 120, h: 7, s: false, f: 1});
		rects.push({x: 180, y: 60, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 240, y: 60, w: 7, h: 60, s: false, f: 1});
		rects.push({x: canvasWidth/2, y: 60, w: 240, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-60, y: 60, w: 7, h: 240, s: false, f: 1});
		rects.push({x: 60, y: 120, w: 60, h: 7, s: false, f: 1});
		rects.push({x: 240, y: 120, w: 180, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: 120, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 120, y: 180, w: 60+7, h: 7, s: false, f: 1});
		rects.push({x: 240, y: 180, w: 120, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: 180, w: 7, h: 180, s: false, f: 1});
		rects.push({x: 60, y: 240, w: 180, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth/2, y: canvasHeight-180, w: 7, h: 60, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: canvasHeight-180, w: 60, h: 7, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight-120, w: 240+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: canvasHeight-120, w: 7, h: 60, s: false, f: 1});
		rects.push({x: canvasWidth-120, y: canvasHeight-120, w: 60+7, h: 7, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight-60, w: 300+7, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-180, y: canvasHeight-60, w: 120, h: 7, s: false, f: 1});
	}
	
	if(mapNum == 3) {
		//setup
		canvasWidth = 600;
		canvasHeight = 420;
		gameSize = 1;
		
		//lines
		rects.push({x: 60, y: 60, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 60, y: 60, w: 180, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: 60, w: 180, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-60, y: 60, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 120, y: 120, w: 7, h: 180, s: false, f: 1});
		rects.push({x: 180, y: 120, w: 240, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-120, y: 120, w: 7, h: 180, s: false, f: 1});
		rects.push({x: 180, y: 180, w: 60, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth/2, y: 180, w: 7, h: 60, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: 180, w: 60, h: 7, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight-180, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 180, y: canvasHeight-180, w: 60, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: canvasHeight-180, w: 60 , h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-60, y: canvasHeight-180, w: 7, h: 120, s: false, f: 1});
		rects.push({x: 180, y: canvasHeight-120, w: 240, h: 7, s: false, f: 1});
		rects.push({x: 60, y: canvasHeight-60, w: 180, h: 7, s: false, f: 1});
		rects.push({x: canvasWidth-240, y: canvasHeight-60, w: 180+7, h: 7, s: false, f: 1});
	}
}