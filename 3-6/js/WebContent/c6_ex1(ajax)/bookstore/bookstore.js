/* mightygumball.js */
/*
 * JSON 파일의 내용을 JSONP로 가져옴
 * 3초마다 업데이트 됨
 *
 */

// var lastReportTime 

window.onload = init;
//추가1
function init() {
	//handleRefresh();
	getSales();
}

function handleRefresh() {
	
	//updateSales 
}


function getSales() {
    //추가1
    var url = "sales.json";
    var request = new XMLHttpRequest();
    request.open("GET",url);
    request.onload = function() {
    	if(request.status==200){
    		updateSales(request.responseText);
    	}
    };
    request.send(null);
}

function updateSales(responseText) {
    //추가1
    var salesDiv = document.getElementById("sales");
    var sales = JSON.parse(responseText);
    for(var i=0;i<sales.length;i++){
    	var sale=sales[i];
    	var div = document.createElement("div");
    	div.setAttribute("class","saleItem");
    	div.innerHTML=sale.name+"[저자명 : "+sale.author+"]은 "+sale.sales+"권 판매";
    	salesDiv.appendChild(div);
    }

}