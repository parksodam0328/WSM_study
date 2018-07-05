/* notetoself2.js  */

window.onload = init;

function init() {
	var button = document.getElementById("add_button");
	button.onclick = createSticky;
//해당 항목의 키가 sticky로 시작되는지 확인, localstorage에 스티커가 아닌 다른 항목도 저장
//key.substring(0, 6) ==> 문자열 0개를 짤라내고 앞에서부터 6개 띄어냄 ==> sticky)
	for (var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		if (key.substring(0, 6) == "sticky") {
			var value = localStorage.getItem(key);
			addStickyToDOM(value);
		}
	}
}

function createSticky() {
	var value = document.getElementById("note_text").value;
	var key = "sticky_" + localStorage.length;
	localStorage.setItem(key, value);
	
	addStickyToDOM(value);
}


function addStickyToDOM(value) {
	//추가1
	var stickies = document.getElementById("stickies");
	var sticky = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class","sticky");
	span.innerHTML=value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);
}



