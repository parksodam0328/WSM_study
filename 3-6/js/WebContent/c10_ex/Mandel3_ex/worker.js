/* 
 * worker.js 
 */

//추가 3
importScripts("workerlib.js");
/*웹 워커는 importScripts라는 전역 함수를 가지고 있다.
importScripts: 하나 이상의 자바스크립트 파일을 워커에 임포트 하는데 사용*/

onmessage = function (task) {
	var workerResult = computeRow(task.data);
	postMessage(workerResult);
}
