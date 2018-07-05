window.onload = function() {
/*    var interval = setInterval(handleRefresh, 3000);*/
    handleRefresh();
}

function handleRefresh() {
//추가1
	$.ajax({
		async:false,
	    url: 'http://apis.data.go.kr/9710000/NationalAssemblyInfoService/getMemberCurrStateList?pageNo=1&numOfRows=10&ServiceKey=eaEsQd3k0BC8mpHmErm%2BKu38TsnJ5gi6K0B4xSbBIp9Ganv%2FUSiz%2Fv8UvqxsgpVzLXREAKOAWZhAZgnBZZONuQ%3D%3D', // 읽어올 문서
	    type: 'GET',
	    origin: 'http://apis.data.go.kr/',
	    dataType: 'xml', // 문서 타입
	    error: function(){ // 로딩 에러시
	        alert('Error loading XML document');
	    },
	    success: function(xml){
	        $(xml).find('items').each(function(){  // xml 문서 item 기준으로 분리후 반복
	            var link = $(this).find("deptCd").text();
	            var title = $(this).find("empNm").text(); 
	            var description1 = $(this).find("engNm").text(); 
	            var description2 = $(this).find("hjNm").text(); 
	            var description3 = $(this).find("jpgLink").text(); 
	            var description4 = $(this).find("num").text(); 
	            var description5 = $(this).find("origNm").text(); 
	            var description6 = $(this).find("reeleGbnNm").text(); 
	            var view_text = link + title + description1+description2+description3+description4+description5+description6; 
	            $("#id").append(view_text);  // #id 에 view_text 삽입
	        });
	    } 
	});
}

/*function updateTraffic(responseText) {
    var subwayDiv = document.getElementById("subway");
    var subways = JSON.parse(responseText);
    for (var i = 0; i < subways.length; i++) {
        var subway = subways[i];
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        div.innerHTML = subway.USE_MON + " : " + subway.LINE_NUM + " : " + subway.SUB_STA_NM + " : "
                        + subway.SEVENTEEN_RIDE_NUM + " : " + subway.SEVENTEEN_ALIGHT_NUM;
        if (subwayDiv.childElementCount == 0) {
                subwayDiv.appendChild(div);
            } else {
                subwayDiv.insertBefore(div, subwayDiv.firstChild);
            }
    }
}*/

/*function updateTraffic(subwaypeople) {
    var subwayDiv = document.getElementById("subwaypeople");
    var traffic = subwaypeople.CardSubwayStatsNew.row;
    for (var i = 0; i < traffic.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        //추가2
        div.innerHTML = "  "  + traffic[i].USE_DT + "일에     "  
        + traffic[i].LINE_NUM  + "호선에     "  
        + traffic[i].SUB_STA_NM  + "역에서    "  
        + traffic[i].RIDE_PASGR_NUM  + "명이 승차하고    "  
        +  traffic[i].ALIGHT_PASGR_NUM + "명이 내렸습니다.   ";  

            if (subwayDiv.childElementCount == 0) {
                subwayDiv.appendChild(div);
            } else {
                subwayDiv.insertBefore(div, subwayDiv.firstChild);
            }
    }

 }*/