/* quote.js */

//추가1
var quotes  = ["1.나는 HTML5 전문가가 되기 위해 열심히 공부합니다.",     
	"2.HTML5 전문가가 되면 웹앱을 만들 수 있게 됩니다!",     
	"3.전공 공부를 열심히 하여 진정한 프로그래머가 되기 위해 노력합시다 "]; 
function postAQuote() {
	var index = Math.floor(Math.random() * quotes.length);
	postMessage(quotes[index]);
}
postAQuote();
setInterval(postAQuote, 3000);

