window.onload = function() {
	var count = document.getElementById("count");
	var display = document.getElementById("display");
	var clear = document.getElementById("clear");	
	var dot = document.getElementById("dot");
	var number = document.querySelectorAll(".number")
	var cal = document.querySelectorAll(".cal")
	var result = document.getElementById("result");

	

	clear.onclick = function() {
		empty(count);		
		empty(display);
	};

	number.forEach(function(el, i) {
		el.onclick = function() {
			display.innerText += el.innerText; //숫자
		};
	});
	dot.onclick = function() {
		display.innerText += "."; //문자
	};
	cal.forEach(function(el, i) {
		el.onclick = function() {			
			count.innerText = `${count.innerText} ${display.innerText} ${el.innerText}`; //문자로 변환
			empty(display);
		};
	});
	result.onclick = function() {
		resultValue();	
	};

	keyControl()

}; //window닫음

function empty(el) {
		return el.innerText = "";
};

function resultValue() {
		if(display.innerText == "") {
			alert("숫자를 입력해주세요")
		} else {
			display.innerText = eval(count.innerText + display.innerText); //문자열을 숫자로 변환
			empty(count)	
			
		};
};


function keyControl() {
	window.addEventListener("keydown", function(winKeyEvent){
	console.log(winKeyEvent.keyCode); //누른 키 확인

	//0 - 9 : 96 - 105
	//엔터 : 13
	//나누기 : 111
	//곱하기 : 106
	//빼기 : 109
	//더하기 : 107
	//도드 : 110
	//취소 : 8

		switch(winKeyEvent.keyCode) { 
			case 96:
				display.innerText += "0";
				break;
			case 97: 				
				display.innerText += "1";				
				break;
			case 98: 
				display.innerText += "2";						
				break;
			case 99: 				
				display.innerText += "3";
				break;
			case 100: 
				display.innerText += "4";						
				break;
			case 101: 				
				display.innerText += "5";				
				break;
			case 102: 
				display.innerText += "6";						
				break;
			case 103: 
				display.innerText += "7";						
				break;
			case 104: 				
				display.innerText += "8";				
				break;
			case 105: 
				display.innerText += "9";						
				break;
				//숫자끝
			case 111: 
				count.innerText += display.innerText + "/";			
				empty(display);				
				break;
			case 106: 
				count.innerText += display.innerText + "*";			
				empty(display);							
				break;
			case 109: 				
				count.innerText += display.innerText + "-";			
				empty(display);					
				break;
			case 107: 
				count.innerText += display.innerText + "+";			
				empty(display);					
				break;
				//연산끝
			case 110:
				display.innerText +=".";
				break;
			case 13:
				resultValue();
				break;
			case 8:
				empty(count);
				empty(display);
				break;
		};
	});

}


