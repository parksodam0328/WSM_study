var map;//map 전역변수 선언.
var codes="";//gus 전역변수 선언
var marker;
var mapContainer;
var lat, lon;
var ex="";
var CODE="";
var code="";
var culs="";
var cul="";
window.onload=function(){
	navigator.geolocation.getCurrentPosition(function(position) {
	    
	     lat = position.coords.latitude, // 위도
	     lon = position.coords.longitude; // 경도
	});
	//getmyLocation();
	handleRefresh();
}

function getInformation(){
	mapContainer = document.getElementById('map'), // 지도를 표시할 div 설정
	mapOption = {
		center: new daum.maps.LatLng(37.466430, 126.932838), // 지도 중심좌표 시청으로 임의 지정.
		level: 7 // 지도의 확대 레벨
		};
	
	code = document.getElementById("code");//html의 gu를 가져온다.
	codes = code.options[code.selectedIndex].value; //gus는 gu의 값을 가지고 있다.(ex: 강북구, 강동구..)
	cul = document.getElementById("cul");
	culs = cul.options[cul.selectedIndex].value;
	//console.log(culs);
	switch(code.selectedIndex){//선택된 인덱스 번호
	case 0: // 강남구
		mapOption = {
			center: new daum.maps.LatLng(37.4968488,127.0679394),//강남구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 1: //강동구
		mapOption = {
			center: new daum.maps.LatLng(37.5492994,127.1464275),//강동구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 2: //강북구 
		mapOption = {
			center: new daum.maps.LatLng(37.6482131,127.0164069),//강북구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 3: //강서구 
		mapOption = {
			center: new daum.maps.LatLng(37.552593,126.85051),//강서구 좌표 지정
			level:7 // 지도의 확대 레벨
			};
		break;
	case 4: //관악구 
		mapOption = {
			center: new daum.maps.LatLng(37.4654529,126.9442478),//관악구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 5: //광진구 
		mapOption = {
			center: new daum.maps.LatLng(37.5388,127.083445),//광진구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 6: //구로구   
		mapOption = {
			center: new daum.maps.LatLng(37.495765,126.8578697),//구로구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 7: //금천구  
		mapOption = {
			center: new daum.maps.LatLng(37.4599896,126.9012665),//금천구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 8: //노원구  
		mapOption = {
			center: new daum.maps.LatLng(37.6541956,127.0769692),//노원구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 9: //도봉구  
		mapOption = {
			center: new daum.maps.LatLng(37.6662325,127.0298724),//도봉구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 10: //동대문구  
		mapOption = {
			center: new daum.maps.LatLng(37.5835755,127.0505528),//동대문구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 11: //동작구  
		mapOption = {
			center: new daum.maps.LatLng(37.4971121,126.944378),//동작구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 12: //마포구  
		mapOption = {
			center: new daum.maps.LatLng(37.5615964,126.9086431),//마포구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 13: //서대문구  
		mapOption = {
			center: new daum.maps.LatLng(37.583312,126.9356601),//서대문구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 14: //서초구  
		mapOption = {
			center: new daum.maps.LatLng(37.483574,127.032661),//서초구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 15: //성동구  
		mapOption = {
			center: new daum.maps.LatLng(37.5508768,127.0408952),//성동구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 16: //성북구  
		mapOption = {
			center: new daum.maps.LatLng(37.6023295,127.025236),//성북구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 17: //송파구 
		mapOption = {
			center: new daum.maps.LatLng(37.504741,127.1144649),//송파구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 18: //양천구 
		mapOption = {
			center: new daum.maps.LatLng(37.527432,126.8558783),//양천구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 19: //영등포구 
		mapOption = {
			center: new daum.maps.LatLng(37.525423,126.896395),//영등포구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 20: //용산구 
		mapOption = {
			center: new daum.maps.LatLng(37.5305208,126.9809672),//용산구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 21: //은평구 
		mapOption = {
			center: new daum.maps.LatLng(37.6175107,126.9249166),//은평구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 22: //종로구 
		mapOption = {
			center: new daum.maps.LatLng(37.6009106,126.9835817),//종로구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 23: //중구 
		mapOption = {
			center: new daum.maps.LatLng(37.5576747,126.9941653),//중구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 24: //중랑구 
		mapOption = {
			center: new daum.maps.LatLng(37.5950497,127.0957062),//중랑구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
		
	}//switch
	
	// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
	map = new daum.maps.Map(mapContainer, mapOption);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new daum.maps.ZoomControl();
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
	
	daum.maps.event.addListener(map, 'dragend', function() {
		handleRefresh();//지도의 중심이 이동될때도 마커를 다시 표시
	});
	if(cul.value=="문화행사"){
		console.log(cul.value);
		document.getElementById('map').style.width='100%';
		document.getElementById('map').style.height='650px';
		document.getElementById("v").innerHTML="<iframe width='80%' height='650px' src='https://www.youtube.com/embed/v2RdCF0ePtw' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
		//document.getElementById("cultures").innerHTML="";
		handleRefresh2();
	}
	else if(cul.value=="미술관"){
		console.log(cul.value);
		document.getElementById('map').style.width='100%';
		document.getElementById('map').style.height='650px';
		document.getElementById("v").innerHTML="";
		document.getElementById("v").style.width="0px";
		document.getElementById("v").style.height="0px";
		document.getElementById("v").style.margin="0px";
		document.getElementById("cultures").innerHTML="";
	handleRefresh();//검색버튼을 클릭할 때 마커 표시
	}
	else if(cul.value=="공연장"){
		console.log(cul.value);
		document.getElementById('map').style.width='100%';
		document.getElementById('map').style.height='650px';
		document.getElementById("v").innerHTML="";
		document.getElementById("v").style.width="0px";
		document.getElementById("v").style.height="0px";
		document.getElementById("v").style.margin="0px";
		document.getElementById("cultures").innerHTML="";
	handleRefresh3();//검색버튼을 클릭할 때 마커 표시
	}
	else if(cul.value=="문화재"){
		console.log(cul.value);
		document.getElementById('map').style.width='0px';
		document.getElementById('map').style.border='0px solid #ffffff';
		document.getElementById('map').style.height='0px';
		document.getElementById("v").innerHTML="";
		document.getElementById("v").style.width="0px";
		document.getElementById("v").style.height="0px";
		document.getElementById("v").style.margin="0px";
		document.getElementById("cultures").innerHTML="";
		
	handleRefresh4();//검색버튼을 클릭할 때 마커 표시
	}
	
	else if(cul.value=="박물관"){
		console.log(cul.value);
		document.getElementById('map').style.width='0px';
		document.getElementById('map').style.border='0px solid #ffffff';
		document.getElementById('map').style.height='0px';
		document.getElementById("v").innerHTML="";
		document.getElementById("v").style.width="0px";
		document.getElementById("v").style.height="0px";
		document.getElementById("v").style.margin="0px";
		document.getElementById("cultures").innerHTML="";
		
	handleRefresh5();//검색버튼을 클릭할 때 마커 표시
	}
}//find

function handleRefresh() {
	for (var i=1; i<1000; i=i+1000 )//16번 호출 i=1 j=1000, i=1001 j=2000, i=2001 j=3000,..., i=15001 j=16000 까지
	{
	var j = i + 999;
    var url="http://openAPI.seoul.go.kr:8088/46547356657061723130367773614650/json/SearchCulturalFacilitiesDetailService/"+i+"/"+j;

    $.getJSON(url, updateCultural);
    
	}//for
	//리스트 부분
    var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	
	/*jsonp를 사용하여 스크립트 정보를 갱신*/
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}//handleRefresh

function handleRefresh2() {
	for (var i=1; i<1000; i=i+1000 )//16번 호출 i=1 j=1000, i=1001 j=2000, i=2001 j=3000,..., i=15001 j=16000 까지
	{
	var j = i + 999;
    var url="http://openAPI.seoul.go.kr:8088/46547356657061723130367773614650/json/SearchConcertDetailService/"+i+"/"+j;

    $.getJSON(url, updateEvent);
    
	}//for
	//리스트 부분
    var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	
	/*jsonp를 사용하여 스크립트 정보를 갱신*/
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}//handleRefresh2

function handleRefresh3() {
	for (var i=1; i<1000; i+=100 )//16번 호출 i=1 j=1000, i=1001 j=2000, i=2001 j=3000,..., i=15001 j=16000 까지
	{
	var j = i+99;
    var url="http://openapi.seoul.go.kr:8088/46547356657061723130367773614650/json/SeoulTheaterInfo/"+i+"/"+j;

    $.getJSON(url, updateConcert);
    
	}//for
	//리스트 부분
    var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	
	/*jsonp를 사용하여 스크립트 정보를 갱신*/
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}//handleRefresh3

function handleRefresh4() {
	for (var i=1; i<10000; i+=1000 )//16번 호출 i=1 j=1000, i=1001 j=2000, i=2001 j=3000,..., i=15001 j=16000 까지
	{
	var j = i+999;
    var url="http://openAPI.seoul.go.kr:8088/46547356657061723130367773614650/json/ListCulturalAssetsInfo/"+i+"/"+j;

    $.getJSON(url, updateCulturalAssets);
    
	}//for
	//리스트 부분
    var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	
	/*jsonp를 사용하여 스크립트 정보를 갱신*/
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}//handleRefresh4

function handleRefresh5() {
	for (var i=1; i<10000; i+=1000 )//16번 호출 i=1 j=1000, i=1001 j=2000, i=2001 j=3000,..., i=15001 j=16000 까지
	{
	var j = i+999;
    var url="http://openAPI.seoul.go.kr:8088/46547356657061723130367773614650/json/SebcMuseumInfoKor2/"+i+"/"+j;
    $.getJSON(url, updateMusiem);
    
	}//for
	//리스트 부분
    var newScriptElement = document.createElement("script");
	newScriptElement.setAttribute("src", url);
	
	/*jsonp를 사용하여 스크립트 정보를 갱신*/
	newScriptElement.setAttribute("id", "jsonp");
	var oldScriptElement = document.getElementById("jsonp");
	var head = document.getElementsByTagName("head")[0];
	if(oldScriptElement == null){
		head.appendChild(newScriptElement);
	}
	else{
		head.replaceChild(newScriptElement, oldScriptElement);
	}
}//handleRefresh5

function updateCultural(cultures) {
	   var cultures = cultures.SearchCulturalFacilitiesDetailService.row;
	   var addr = "";
	   var center = map.getCenter(); // 중심 가져오기 
	   var position = {
	          latitude : center.getLat(),
			  longitude: center.getLng()
	      };
	   

	   for (var i = 0; i < cultures.length; i++) {
	      var c = cultures[i];
	      if(c.SUBJCODE =="4"){
	      var imageSrc = "marker1.png",
			imageSize = new daum.maps.Size(27, 30), //마커의 크기(daummap에서 size 검색, 크기정보를 가지고 있는 사이즈 객체 생성)
			imageOption = {offset: new daum.maps.Point(14, 28)};//point 검색, 화면 좌표 정보를 담고 있는 포인터 객체 생성
		  
	      var loc = {//open API의 값들 위도와 경도
	            latitude : c.X_COORD,
				longitude: c.Y_COORD
	      };
		  var km = computeDistance (position, loc); //거리 계산, position 지도의 중심좌표이고 loc는 각 주차장 좌표
		  if(addr != c.ADDR && km <= 3){//주소가 중복되지 않고, 거리가 2km이내의 것들을 가져온다.
			  addr = c.ADDR;
			  console.log(c.X_COORD);
			  addMarker(imageSrc, imageSize, imageOption, c.X_COORD, c.Y_COORD, c.FAC_NAME,c.ADDR,c.PHNE, c.CLOSEDAY);
		  }
	      }
		  
	   }

	   
	   //밑에 리스트 추가하는 부분
	   var culturesDiv = document.getElementById("cultures");
	   culturesDiv.innerHTML="";
	   
		for(var i=0; i<cultures.length; i++){
			var c = cultures[i];
			
				ex = c.ADDR;
				if(ex.indexOf("서울  ")>-1){
					ex = ex.replace("서울  ","");
				}else if(ex.indexOf("서울 특별시 ")>-1){
					ex = ex.replace("서울 특별시 ","");
				}else if(ex.indexOf("서울 ")>-1){
					ex = ex.replace("서울 ","");
				}else if(ex.indexOf("서울특별시 ")>-1){
					ex = ex.replace("서울특별시 ","");
				}else{
					ex = ex.replace("서울시 ","");
				}
				CODE=ex.substring(0,codes.length);
				//console.log(gu.value);
			var div = document.createElement("div");
			div.setAttribute("class", "cultures");
			
			div.innerHTML="";
			//console
			if (CODE == codes && codes == code.value && c.SUBJCODE =="4") {
				
				div.innerHTML = "[" + CODE + "]" + c.FAC_NAME;
				
				div.innerHTML += "<input type=button value=위치" + " onclick=\"window.open('http://www.google.co.kr/maps/search/" + c.FAC_NAME + " ')\"/>"; 
				
				if (c.PHNE != "") {
					div.innerHTML += "<br>" + "☎) " + c.PHNE;
				}
				if (c.ADDR != "") {
					div.innerHTML += "<br>" + "주소: " + c.ADDR + "(x:"
							+ c.X_COORD + "&nbsp;,&nbsp;y:" + c.Y_COORD + ")";
				}
				
				if (c.CLOSEDAY != "") {
					div.innerHTML += "<br>휴관일 : " + c.CLOSEDAY;
				}
				
				if(c.HOMEPAGE!=""){
					div.innerHTML +="<br> 홈페이지 :" +"<a href="+c.HOMEPAGE+" target=blank>"+c.HOMEPAGE+"</a>";
				}
			}else{continue;}
			if(culturesDiv.childElementCount==0){
				culturesDiv.appendChild(div);
			}
			else{
				culturesDiv.insertBefore(div, culturesDiv.firstChild);
			}
			
			}
		
	   
		
		if(cultures.length > 0){
			lastReportTime = cultures[cultures.length-1].time;
		}
	
		
}

function updateEvent(events) {
	   var events = events.SearchConcertDetailService.row;
	   //document.getElementById("map").style.height="0px";
	   //밑에 리스트 추가하는 부분
	   var eventsDiv = document.getElementById("cultures");
	   eventsDiv.innerHTML="";
	   //alert(culturesDiv);
	   //console.log("aaaaa");
		for(var i=0; i<events.length; i++){
			var e = events[i];
			
			
			var div = document.createElement("div");
			div.setAttribute("class", "cultures");
			
			div.innerHTML="";
			console.log(e.PLACE);
			if (e.GCODE == code.value) {
				div.innerHTML = "[" + e.GCODE + "]" + e.TITLE;
				
				if (e.INQUIRY != "") {
					div.innerHTML += "<br>" + "☎) " + e.INQUIRY;
				}
				if (e.PLACE != "") {
					div.innerHTML += "<br>" + "장소: " + e.PLACE;
				}
				if (e.STRTDATE != "") {
					div.innerHTML += "<br>시작일자 : " + e.STRTDATE;
				}
				if (e.END_DATE != "") {
					div.innerHTML += "<br>종료일자 : " + e.END_DATE;
				}
				if (e.TIME != "") {
					div.innerHTML += "<br>시간 : " + e.TIME;
				}
				if (e.USE_TRGT != "") {
					div.innerHTML += "<br>이용대상 : " + e.USE_TRGT;
				}
				if (e.USE_FEE != "") {
					div.innerHTML += "<br>이용요금 : " + e.USE_FEE;
				}
				if (e.MAIN_IMG != "") {
					div.innerHTML += "<br>이미지 : " + "<img src="+e.MAIN_IMG+" width='100px' height='100px'/>";
				}
				if(e.ORG_LINK!=""){
					div.innerHTML +="<br> 홈페이지 :" +"<a href="+e.ORG_LINK+" target=blank>"+e.HOMEPAGE+"</a>";
				}
			}else{continue;}
			if(eventsDiv.childElementCount==0){
				eventsDiv.appendChild(div);
			}
			else{
				eventsDiv.insertBefore(div, eventsDiv.firstChild);
			}
			
			}
		if(events.length > 0){
			lastReportTime = events[events.length-1].time;
		}
}

function updateConcert(concerts) {
	   var concerts = concerts.SeoulTheaterInfo.row;
	   var addr = "";
	   var center = map.getCenter(); // 중심 가져오기 
	   var position = {
	          latitude : center.getLat(),
			  longitude: center.getLng()
	      };
	   
	   //밑에 리스트 추가하는 부분
	   var concertsDiv = document.getElementById("cultures");
	   concertsDiv.innerHTML="";
	   
		for(var i=0; i<concerts.length; i++){
			var con = concerts[i];
			console.log(con.TRDPL_ADDR);
				ex = con.TRDPL_ADDR;
				if(ex.indexOf("서울  ")>-1){
					ex = ex.replace("서울  ","");
				}else if(ex.indexOf("서울 특별시 ")>-1){
					ex = ex.replace("서울 특별시 ","");
				}else if(ex.indexOf("서울 ")>-1){
					ex = ex.replace("서울 ","");
				}else if(ex.indexOf("서울특별시 ")>-1){
					ex = ex.replace("서울특별시 ","");
				}else{
					ex = ex.replace("서울시 ","");
				}
				CODE=ex.substring(0,codes.length);
				//console.log(gu.value);
			var div = document.createElement("div");
			div.setAttribute("class", "cultures");
			console.log(con.TRDPL_ADDR);
			div.innerHTML="";
			//console
			if (CODE == codes && codes == code.value) {
				
				div.innerHTML = "[" + CODE + "]" + con.TRNM_NM;
				
				div.innerHTML += "<input type=button value=위치" + " onclick=\"window.open('http://www.google.co.kr/maps/search/" + con.TRNM_NM + " ')\"/>"; 
				
				if (con.TEL != "") {
					div.innerHTML += "<br>" + "☎) " + con.TEL;
				}
				if (con.TRDPL_ADDR != "") {
					div.innerHTML += "<br>" + "주소: " + con.TRDPL_ADDR;
				}
				
				if (con.SEAT_NUM != "") {
					div.innerHTML += "<br>객석수 : " + con.SEAT_NUM;
				}
				if (con.STATE_GBN != ""&&con.STATE_GBN!="폐업") {
					div.innerHTML += "<br>영업상태 : " + con.STATE_GBN;
				}
				if (con.DCB_YMD != "") {
					div.innerHTML += "<br>폐업일자 : " + con.DCB_YMD;
				}
			}else{continue;}
			if(concertsDiv.childElementCount==0){
				concertsDiv.appendChild(div);
			}
			else{
				concertsDiv.insertBefore(div, concertsDiv.firstChild);
			}
			
			}
		
	   
		
		if(concerts.length > 0){
			lastReportTime = concerts[concerts.length-1].time;
		}
	
		
}


function updateCulturalAssets(assets) {
	   var assets = assets.ListCulturalAssetsInfo.row;
	   
	   //밑에 리스트 추가하는 부분
	   var assetsDiv = document.getElementById("cultures");
	   assetsDiv.innerHTML="";
	   
		for(var i=0; i<assets.length; i++){
			var a = assets[i];
				//console.log(gu.value);
			var div = document.createElement("div");
			div.setAttribute("class", "cultures");
			console.log(a.STAND_ADDR);
			div.innerHTML="";
			//console
			if (a.STAND_REGION == codes ) {
				
				div.innerHTML = "[" + a.STAND_REGION + "]" + a.NAME_KOR+"("+a.NAME_CNI+", "+a.NAME_ENG+")";
				
				div.innerHTML += "<input type=button value=위치" + " onclick=\"window.open('http://www.google.co.kr/maps/search/" + a.NAME_KOR + " ')\"></button>"; 
				
				if (a.STAND_ADDR != "") {
					div.innerHTML += "<br>" + "주소: " + a.STAND_ADDR;
				}
				
				if (a.APP_REASON_MINI != "") {
					div.innerHTML += "<br>소개 : " + a.APP_REASON_MINI;
				}
				
				if(a.BOARD_KOR!=""){
					div.innerHTML +="<br>상세 소개 :" +a.BOARD_KOR;
				}
				
			}else{continue;}
			if(assetsDiv.childElementCount==0){
				assetsDiv.appendChild(div);
			}
			else{
				assetsDiv.insertBefore(div, assetsDiv.firstChild);
			}
			
			}
		
	   
		
		if(assets.length > 0){
			lastReportTime = assets[assets.length-1].time;
		}
	
		
}
function updateMusiem(musiem) {
	   var musiem = musiem.SebcMuseumInfoKor2.row;
	   
	   //밑에 리스트 추가하는 부분
	   var musiemDiv = document.getElementById("cultures");
	   musiemDiv.innerHTML="";
	   
		for(var i=0; i<musiem.length; i++){
			var m = musiem[i];
				//console.log(gu.value);
			var div = document.createElement("div");
			div.setAttribute("class", "cultures");
			console.log(m.H_KOR_GU);
			div.innerHTML="";
			//console
			if (m.H_KOR_GU == codes ) {
				
				div.innerHTML = "[" + m.H_KOR_GU + "]" + m.NAME_KOR;
				
				div.innerHTML += "<input type=button value=위치" + " onclick=\"window.open('http://www.google.co.kr/maps/search/" + m.NAME_KOR + " ')\"/>"; 
				
				if (m.H_KOR_CITY != "") {
					div.innerHTML += "<br>" + "주소: " + m.H_KOR_CITY+" "+m.H_KOR_GU+" "+m.H_KOR_DONG;
				}
				
				if (m.CATE3_NAME != "") {
					div.innerHTML += "<br>분류 : " + m.CATE3_NAME;
				}
				
				
			}else{continue;}
			if(musiemDiv.childElementCount==0){
				musiemDiv.appendChild(div);
			}
			else{
				musiemDiv.insertBefore(div, musiemDiv.firstChild);
			}
			
			}
		
	   
		
		if(musiem.length > 0){
			lastReportTime = musiem[musiem.length-1].time;
		}
	
		
}

function addBound(){
	// 지도에 표시할 원을 생성
	var bound = new daum.maps.Circle({
	   center : map.getCenter(),
	   radius: 3000,
	   strokeWeight: 5,
	   strokeColor: '#FFAAA5',
	   strokeOpacity: 0.5,
	   strokeStyle: 'solid',
	   fillColor: '#FFAAA6',
	   fillOpacity: 0.3,
	   zIndex: 1
	}); 
	
	// 지도에 원을 표시합니다 
	bound.setMap(map);

	daum.maps.event.addListener(map, 'dragstart', function() {//지도가 이동될때도 원이 다시 그려짐
		bound.setMap(null);
	});
}

//마커추가
function addMarker(imageSrc, imageSize, imageOption, latitude, longitude, name, address,tel, closeday) {
	
	//이미지 마커 맵에 추가
	var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new daum.maps.LatLng(latitude, longitude);
	var marker = new daum.maps.Marker({
		position: markerPosition,
		image: markerImage,
		clickable: true,
		zIndex: 7
	});
	
	marker.setMap(map);
	//console.log(marker.setMap(map));
	daum.maps.event.addListener(map, 'dragstart', function() {
		marker.setMap(null);
	});
    
	
	var content =  "<div style='width:100%; height:100%; padding:5px; font-size:0.8em;'>"+"미술관 : "+ '<b>'+ name +'</b>'+'<br>'+"주소 : " +address+'<br>'+"전화번호 : "+tel+'<br>'+"휴관일 : " +'<font color="red" >'+closeday+'</font>'+ "</div>";

	
	// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var iwContent = content, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
		iwPosition = markerPosition, //인포윈도우 표시 위치입니다
		iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

	// 인포윈도우를 생성합니다
	var infowindow = new daum.maps.InfoWindow({
	   position : iwPosition,
	   content : iwContent,
	   removable : iwRemoveable,
	   zIndex : 10
	});

	// 마커에 클릭이벤트를 등록합니다
	daum.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);  
	});

	
}

//거리계산. 준비된 코드
function computeDistance  (startCoords,destCoords){
  
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads =degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(destCoords.latitude);
  var destLongRads = degreesToRadians(destCoords.longitude);
  
  var Radius = 6371;
  var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads ) +
                           Math.cos(startLatRads) * Math.cos(destLatRads )  *
                           Math.cos(startLongRads -destLongRads )) * Radius;
  
  return distance ;
}

//도
function degreesToRadians(degrees){
  var radians = (degrees * Math.PI)/180;
  return radians;
}

//오류찾는 함수
function displayError(error) {
	var errorTypes = {
		0 : "Unknown error",
		1 : "Permission denied",
		2 : "Position is not available",
		3 : "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

