/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
	var button2 = document.getElementById("deleteAllButton");
	button2.onclick = handleButtonClick1;
	var button3 = document.getElementById("deleteButton");
	button3.onclick = handleButtonClick2;
	loadPlaylist();
}

function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	//alert("Adding " + songName);
	
	//추가1
	if(songName==""){
		alert("곡을 입력하세요.");
	} else{
		var li = document.createElement("li");
		li.innerHTML=songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		
		save(songName);
	}
}

function handleButtonClick2(e){
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	//alert("Adding " + songName);
	
	//추가1
	if(songName==""){
		alert("곡을 입력하세요.");
	} else{
		var li = document.createElement("li");
		li.innerHTML=songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		
		remove(songName);
	}
}
	function handleButtonClick1(e) {
		removeAll();
	}
		


