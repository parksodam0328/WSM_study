window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;

}

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "squares") {
		for (var squares = 0; squares < 15; squares++) {
			drawSquare(canvas, context);
		}
	}
	if (shape == "circles") {
		for (var circles = 0; circles < 15; circles++) {
			drawCircle(canvas, context);
		}
	}
	if (shape == "lines") {
		for (var lines = 0; lines < 15; lines++) {
			drawLine(canvas, context);
		}
	}
	drawText(canvas, context);
}

// This is where we'll set the background color
function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

}

// Draws a square at a random location
function drawSquare(canvas, context) {

}

function drawCircle(canvas, context) {

}

function drawLine(canvas, context) {

}


function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
}

