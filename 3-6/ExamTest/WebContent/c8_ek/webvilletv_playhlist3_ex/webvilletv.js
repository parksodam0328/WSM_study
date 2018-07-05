var position = 0;
var playlist;
var video;
/*확장자는 제거*/
window.onload = function() {
//추가1
	
	
	
	
/*이밴트가 발생했을때 호출할 함수 : nextVideo*/
	video.src = playlist[position] + getFormatExtension();
	video.load();
	video.play();
};

function nextVideo() {
	position++;
	if (position >= playlist.length) {
		position = 0;
	}
	video.src = playlist[position] + getFormatExtension();
	video.load();
	video.play();
}
/*canplayType 메서드 : 브라우저가 비디오를 재생할 수 없으면 빈문자열을 반환*/
//추가2
