/* addremove.js */


window.onload = init;

function init() {
	var addButton = document.getElementById("addButton");
	addButton.onclick = addItem;
	var removeButton = document.getElementById("removeButton");
	removeButton.onclick = removeItem;
	var clearButton = document.getElementById("clearButton");
	clearButton.onclick = clearItems;

	for (key in localStorage) {
		addItemToDOM(key, localStorage[key]);
	}	

	// 같은 이유로 열린 다른 창의 localStorage에 생기는 
	// 변경을 감시하는 이벤트 리스너를 붙임
	// 주의: IE 8 이하 버전에선 작동하지 않음. 이 기능 지원은 IE 9 버전부터 생겼습니다.
	window.addEventListener("storage", "storageChanged", false);
}

function addItem(e) {
	var key = document.getElementById("key").value;
	var value = document.getElementById("value").value;

	localStorage.setItem(key, value);

	addItemToDOM(key, value);
}

function removeItem(e) {
	var key = document.getElementById("key").value;
	var value = document.getElementById("value").value;
	localStorage.removeItem(key);
	removeItemFromDOM(key);
}

function addItemToDOM(key, value) {
	//추가1
	var items = document.getElementById("items");
	var item = document.createElement("li");
	item.setAttribute("id",key);
	
	var span = document.createElement("span");
	span.setAttribute("class","note");
	
	span.innerHTML = key+": "+value;
	item.appendChild(span);
	items.appendChild(item);
}

// 삭제를 보여줄 준비가 되면 이 함수를 추가
function removeItemFromDOM(key) {
	var item = document.getElementById(key);
	item.parentNode.removeChild(item);
}

// 목록의 '맨 앞'에 삽입하기 위해
//stickyList.insertBefore(newSticky, stickyList.firstChild);

function clearItems() {
	localStorage.clear();
	var itemsList = document.getElementById("items");
	var items = itemsList.childNodes;
	for (var i = items.length-1; i >= 0; i--) {
		itemsList.removeChild(items[i]);
	}

}

function storageChanged(e) {
	console.log("이벤트: 키는 " + e.key);
	console.log("이벤트: 값은 " + e.value);
}
