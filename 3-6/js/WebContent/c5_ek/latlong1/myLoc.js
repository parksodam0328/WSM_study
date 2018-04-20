/* myLoc.js */
/*var ourCoords = {
	latitude :47.624851,
	longitude:-122.52099
};*/

var ourCoords = {
	latitude :37.484216,
	longitude:126.929680
};
window.onload = getMyLocation;




//추가1
function getMyLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	}else{
		alert("이런, 지오로케이션이 제공되지 않네요")
	}
}
//추가2
function displayLocation(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var div = document.getElementById("location");
	div.innerHTML="당신은 위도:"+latitude+", 경도:"+longitude+"에 있습니다.";
	var km = computeDistance(position.coords, ourCoords);
	var distance = document.getElementById("distance");
	distance.innerHTML="당신은 WickedlySmart HQ와 "+km+"km 떨어져 있습니다.";
}

function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);

	var Radius = 6371; // 지구의 반경 (km)
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
					Math.cos(startLatRads) * Math.cos(destLatRads) *
					Math.cos(startLongRads - destLongRads)) * Radius;

	return distance;
}

function degreesToRadians(degrees) {
	radians = (degrees * Math.PI)/180;
	return radians;
}
//추가3
function displayError(error){
	var errorTypes={
			0:"알려지지 않은 에러",
			1:"사용자가 권한 거부",
			2:"위치를 찾을 수 없음",
			3:"요청 응답시간 초과"
	};
	var errorMessage = errorTypes[error.code];
	if(error.code==0|| error.code==2){
		errorMessage = errorMessage+" "+error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML=errorMessage;
}
