////////////////////////////////////////////////////////////////////
// natwhereuat.js
//
// basic natwhereuat tool: draws a thin, solid line
// author: Justin Bakse



////////////////////////////////////////////////////////////////////
// create and install brush

var natwhereuat = new Brush("natwhereuat",
	"./brushes/natwhereuat/natwhereuat.svg");
brushes.push(natwhereuat);



////////////////////////////////////////////////////////////////////
// define brush behavior

natwhereuat.draw = function() {
	noFill();
	fill(forecolor);
	stroke(forecolor);

	if (mouseIsPressed) {
		ellipse(pmouseX, pmouseY, 30, 30);
		line(pmouseX, pmouseY, mouseX, mouseY);

	}
};
