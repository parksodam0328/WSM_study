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
	drawBird(canvas, context);
	drawOutline(canvas,context);
	
	
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
	var selectObj = document.getElementById("shapeColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;
	var w = Math.floor(Math.random() * 50);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.fillStyle = color;
	context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context) {
	var selectObj = document.getElementById("shapeColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;
	var radius = Math.floor(Math.random() * 50);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.beginPath();
	context.arc(x, y, radius, 0, degreesToRadians(360), true);
	context.fillStyle = color;
	context.fill();
}

function drawLine(canvas, context) {
	var selectObj = document.getElementById("shapeColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	var x2 = Math.floor(Math.random() * canvas.width);
	var y2 = Math.floor(Math.random() * canvas.height);
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x2, y2);
	context.lineWidth = 10;
	context.strokeStyle = color;
	context.stroke();
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
	context.fillStyle = fgColor;
	context.font = "bold 1em 고딕";
	context.textAlign = "left";
	context.fillText("이 트윗을 봅니다", 20, 40);
	selectObj = document.getElementById("tweets");
	index = selectObj.selectedIndex;
	var tweet = selectObj[index].value;
	context.font = "italic 1.2em 명조";

	if(tweet.length>60){
		var tweetLines = splitIntoLines(tweet);
		for(var i=0;i<tweetLines.length;i++){
			context.fillText(tweetLines[i],30,70+(i*25));
		}
	}else{
		context.fillText(tweet,30,100);
	}
	
	
	
	
		context.fillText(tweet, 30, 100);

	context.font = "bold 1em 고딕";
	context.textAlign = "right";
	context.fillText("훌륭한 문구입니다 !", canvas.width - 20,
			canvas.height - 40);
}

function drawBird(canvas, context) {
var twitterBird = new Image();
var mirim = new Image();
twitterBird.src="twitterBird.png";
mirim.src="mirim.png";
twitterBird.onload = function() {
	context.drawImage(twitterBird,20,120,70,70);
	context.drawImage(mirim,520,20,70,70);
}
	
	
	
	
	
	
	

}

function drawOutline(canvas, context) {
context.lineWidth=5;
context.strokeStyle="blue";
context.strokeRect(2,2,canvas.width-4, canvas.height-4);
	
	
}

function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");
	for (var i = 0; i < tweets.length; i++) {
		tweet = tweets[i];
		var option = document.createElement("option");
		option.text = tweet.text;
		option.value = tweet.text.replace("\"", "'");
		tweetsSelection.options.add(option);
	}
	tweetsSelection.selectedIndex = 0;
}

function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
	
}

function splitIntoLines(str) {
	var strs = new Array();
	var space = str.indexOf(' ', 60);
	strs[0] = str.substring(0, space);
	strs[1] = str.substring(space + 1);
	if(strs[1].length>60){
		var space =strs[1].indexOf(' ', 60);
		strs[1] = str[1].substring(space+1);
	}
	return strs;
}