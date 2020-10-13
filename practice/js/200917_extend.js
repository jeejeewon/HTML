var maxDocWidth = maxDocHeight = 0;
var minDivSize = 5, maxDivSize = 100;
var minDivPadding = 5, maxDivPadding = 25;
var count = 0;
$(function() {
	//var jq = $.noConflict(); //이전 jquery를 변수에 삽입
	// $.noConflict(); //이전 jquery 삭제 
	//local로 할 땐 작동 안됨, 지우고 하기


	// console.log(setRandom(5, 10));
	setDoc(); //window의 넓이 높이

	var timer = setInterval(function() {
		var wh = setDivSize(); //div의 크기
		// var pad = setDivPad(); //div의 패딩

		var firstDiv = $("<div></div>"); //div 생성
		firstDiv.css({
			top: setTop(wh),
			left: setLeft(wh),
			backgroundColor: setColor(),
			padding: setDivPad()
		});
		var secondDiv = $("<div></div>");
		secondDiv.css({
			backgroundColor: setColor(),
			padding: setDivPad()
		});
		var thirdDiv = $("<div></div>");
		thirdDiv.css({
			width: wh,
			height: wh,
			backgroundColor: setColor()
		});
		secondDiv.append(thirdDiv);
		firstDiv.append(secondDiv);
		$("#background").append(firstDiv);
		count++;
		if(count == 10) {
			clearInterval(timer);
		}

		//Div가 존재하고 있을 경우 작동
		// $("#background>div").click(function() {
		// 	alert("click");
		// });

		//요소를 동적으로 삽입한 경우 클릭
		$("body").on("click", "#background>div", function(e) {
			console.log(this); //#background>div
			// $(this).animate({
			// 	opacity: "0"
			// }, 1000, function() {
			// 	$(this).remove();
			// });
			$(this).animate({
				opacity: "0"
			}, {
				duration: 1000,
				step: function(now, fx) {
					console.log(fx.prop + " : " + now);
					if(fx.prop == "opacity" && now == 0) {
						$(this).remove();
					}
				}
			});
		});


		// console.log(setAlpar());
		// console.log(wh + " : " + pad);
	}, 3000);
	console.log(maxDocWidth + " : " + maxDocHeight);
	
});

//윈도우 크기를 조절
$(window).resize(function() {
	setDoc();
	// console.log(maxDocWidth + " : " + maxDocHeight);
});

var setRandom = function(min, max) {
	// Math.random() 0 ~ 1 사이값
	// Math.floor - 올림 
	return Math.floor(Math.random() * (max - min + 1)) + min; //min 포함
}
//document 넓이, 높이
var setDoc = function() {
	maxDocWidth = $("#background").width();
	maxDocHeight = $("#background").height();
}

var setDivSize = function() {
	return setRandom(minDivSize, maxDivSize);
}

var setDivPad = function() {
	return setRandom(minDivPadding, maxDivPadding);
}

var setColor = function() {
	return 'rgba(' + setRandom(0, 255) + ", " + setRandom(0, 255) + ", " + setRandom(0, 255) + ", " + setAlpar() + ")";
}

var setTop = function(wh) {
	return setRandom(wh, maxDocHeight - wh);
}

var setLeft = function(wh) {
	return setRandom(wh, maxDocWidth - wh);
}

var setAlpar = function() {
	return Math.floor(Math.random() * 10) / 10;
}