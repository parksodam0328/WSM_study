
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
				drawSquare(canvas, context);
			}
		}
		else if (shape == "circles") {
			for (var circles = 0; circles < 20; circles++) {
				drawCircle(canvas, context);
			}
		}
		else if (shape == "line") {
			for (var line = 0; line < 20; line++) {
				drawline(canvas, context);
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
	function drawSquare(canvas, context) {
		var w = Math.floor(Math.random() * 40);    
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);

		//context.fillStyle = "magenta";

		context.fillRect(x, y, w, w+20);
	}

	function drawline(canvas, context) {
	
		var w = Math.floor(Math.random() * 200);    
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);

	
		context.beginPath(); /* 새로운 경로글 그리기 시작 */

		context.moveTo(w, w);
		context.lineTo(x, y);
		context.closePath(); /* 경로를 닫는다 */
		context.lineWidth = 5;
  	    //context.fillStyle="red"; , context.fill(); 은 다각형의 색을 채운다. */
        //context.strokeStyle = '#ff0000'; /* set line color */

        context.stroke(); /* 경로에 따라 선을 그린다 */
	}

	// Draws a circle at a random location
	function drawCircle(canvas, context) {
		var radius = Math.floor(Math.random() * 40);
		var x = Math.floor(Math.random() * canvas.width);
		var y = Math.floor(Math.random() * canvas.height);

		context.beginPath();
		context.arc(x, y, radius, 0, degreesToRadians(360), true);


		//context.fillStyle = "blue";

		context.fill();
	}

	function degreesToRadians(degrees) {
	    return (degrees * Math.PI)/180;
	}
	