/* notetoself.js
 *
 * 이 버전은 배열을 사용해서 스티키 노트를 삭제할 수 있습니다.
 * 그리고 로컬 저장소의 스티키 노트를 전부 삭제하는 버튼도 있습니다. 
 * 이 버튼을 누르면 DOM에서 모든 스티키 노트가 삭제되어 스티키 배열이 []으로 초기화 됩니다.
 */

window.onload = init;

function init() {
	
	
	//추가1  배열로 선언하여 활용
	var button = document.getElementById("add_button");
	button.onclick=createSticky;
	
	var clearButton = document.getElementById("clear_button");
	clearButton.onclick=clearStickyNotes;
	var stickiesArray = localStorage["stickiesArray"];
	if(!stickiesArray){
		stickiesArray=[];
		localStorage.setItem("stickiesArray",JSON.stringify(stickiesArray));
	}else{
		stickiesArray = JSON.parse(stickiesArray);
	}
	
	for(var i=0;i<stickiesArray.length;i++){
		var key = stickiesArray[i];
		var value=localStorage[key];
		addStickyToDOM(key, value);
	}
	
}

function getStickiesArray() {
	var stickiesArray = localStorage.getItem("stickiesArray");
	if (!stickiesArray) {
		stickiesArray = [];
		localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	} else {
		stickiesArray = JSON.parse(stickiesArray);
	}
	return stickiesArray;
}

function createSticky() {
	//추가2
	var stickiesArray = getStickiesArray();
	var currentDate = new Date();
	var key="sticky_"+currentDate.getTime();
	
	var value = document.getElementById("note_text").value;
	localStorage.setItem(key,value);
	stickiesArray.push(key);
	
	localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
	addStickyToDOM(key, value);
}



function addStickyToDOM(key, value) {
	var stickies = document.getElementById("stickies");
	var sticky = document.createElement("li");
	sticky.setAttribute("id", key);
	var span = document.createElement("span");
	span.setAttribute("class", "sticky");
	span.innerHTML = value;
	sticky.appendChild(span);
	stickies.appendChild(sticky);

	
}


function clearStickyNotes() {
	localStorage.clear();
	var stickyList = document.getElementById("stickies");
	var stickies = stickyList.childNodes;
	for (var i = stickies.length-1; i >= 0; i--) {
		stickyList.removeChild(stickies[i]);
	}

	// notes 배열을 초기화
	var stickiesArray = getStickiesArray();
}
