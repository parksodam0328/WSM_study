var position = 0;
var playlist;
var video;
/*확장자는 제거*/
window.onload = function() {
	playlist = ["video/preroll", 
				"video/areyoupopular", 
				"video/destinationearth"];
	video = document.getElementById('video');
	video.addEventListener("ended", nextVideo,false);
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
/*cabplayType 메서드 : 브라우저가 비디오를 재생할 수 없으면 빈문자열을 반환*/
function getFormatExtension() {
    if (video.canPlayType("video/mp4") != "") {
        return ".mp4";
    } else if (video.canPlayType("video/ogg") != "") {
        return ".ogv";
    } else if (video.canPlayType("video/webm") != "") {
        return ".webm";
    }
}
