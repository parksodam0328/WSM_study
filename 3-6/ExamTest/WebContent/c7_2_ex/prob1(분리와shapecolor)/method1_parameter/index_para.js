
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
			for (var squares = 0; squares < 20; squares++) {
				drawSquare(canvas, context, shColor);
			}
		}
		
		else if(shape=="circles") {
			for(var circles=0;circles<15;circles++) {
				drawCircle(canvas, context, shColor);
			}
		}
		
		else if(shape=="lines") {
			for(var lines=0;lines<15;lines++) {
				drawLine(canvas, context, shColor);
			}
		}

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
	function drawSquare(canvas, context, shColor) {
		var w = Math.floor(Math.random() * 40);    
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);

		context.fillStyle = shColor;
		context.fillRect(x, y, w, w);
	}
	
	function drawCircle(canvas, context, shColor) {
		var radius=Math.floor(Math.random()*40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);
		
		context.beginPath();
		context.arc(x,y,radius,0,degreesToRadians(360),true);
		
		context.fillStyle=shColor;
		context.fill();
	}
	
	function drawLine(canvas, context, shColor) {
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);
		var x1 = Math.floor(Math.random() * canvas.width);
		var y1 = Math.floor(Math.random() * canvas.height);
		context.beginPath();
		context.moveTo(x,y);
		context.lineTo(x1,y1);
		context.closePath();
		context.strokeStyle=shColor;
		context.lineWidth = 15;
		context.stroke();
		
	}


	function degreesToRadians(degrees) {
	    return (degrees * Math.PI)/180;
	}





