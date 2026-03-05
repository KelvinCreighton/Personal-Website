function drawRects() {
	for(var i = 0; i < rects.length; i++) {
		if(rects[i].s == false) {
			noStroke();
		} else {
			stroke(rects[i].s)
		}
		if(rects[i].f == false) {
			noFill();
		} else {
			fill(rects[i].f);
		}
		
		
		rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
	}
}