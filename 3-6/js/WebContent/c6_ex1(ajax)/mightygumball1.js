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
	//추가1
	getSales();
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
//추가2
function updateSales(sales) {
	
	//div.innerHTML 
	 var salesDiv = document.getElementById("sales");
	    var sales = JSON.parse(responseText);
	   /* for(var i=0;i<sales.length;i++){
	    	var sale=sales[i];
	    	var div = document.createElement("div");
	    	div.setAttribute("class","saleItem");
	    	div.innerHTML=sale.name+"에서 볼을 "+sale.sales+"개 판매하였습니다.";
	    	salesDiv.appendChild(div);
	    }*/
}


