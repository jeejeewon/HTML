var maxDocWidth = maxDocHeight = 0;
var minDivSize = 50, maxDivSize = 500;
var minDivPadding = 5, maxDivPadding = 25;
var count = 0;
$(function() {
	//var jq = $.noConflict(); //이전 jquery를 변수에 삽입
	// $.noConflict(); //이전 jquery 삭제 
	//local로 할 땐 작동 안됨, 지우고 하기

	setDoc(); //window의 넓이 높이

	var timer = setInterval(function() {
		var wh = setDivSize(); 

		var firstDiv = $("<div></div>"); //div 생성
		firstDiv.css({
			display : "none",
			opacity : 0.3,
			top: setTop(wh), //생성 위치
			left: setLeft(wh),			
			padding: setDivPad()
		});
		var secondDiv = $("<div></div>");
		secondDiv.css({			
			opacity : 0.3,			
			padding: setDivPad()
		});
		var thirdDiv = $("<div></div>");
		thirdDiv.css({			
			opacity : 0.3,
			width: wh,
			height: wh			
		});
		//div 추가
		secondDiv.append(thirdDiv).fadeIn(1000);
		firstDiv.append(secondDiv).fadeIn(1000);
		$("#background").append(firstDiv).fadeIn(1000);
		//div 생성갯수
		count++;
		if(count == 100) {
			clearInterval(timer);
		}
	}, 2000);

	console.log(maxDocWidth + " : " + maxDocHeight);

});

//윈도우 크기를 조절
$(window).resize(function() {
	setDoc();
	// console.log(maxDocWidth + " : " + maxDocHeight);
});

function setRandom(min, max) {
	// Math.random() 0 ~ 1 사이값
	// Math.floor - 올림 
	return Math.floor(Math.random() * (max - min + 1)) + min; //min 포함
}
//document 넓이, 높이
function setDoc() {
	maxDocWidth = $("#background").width();
	maxDocHeight = $("#background").height();
}

function setDivSize() {
	return setRandom(minDivSize, maxDivSize);
}

function setDivPad() {
	return setRandom(minDivPadding, maxDivPadding);
}

function setTop(wh) {
	return setRandom(wh, maxDocHeight - wh);
}

function setLeft(wh) {
	return setRandom(wh, maxDocWidth - wh);
}

function setAlpar() {
	return Math.floor(Math.random() * 10) / 10;
}