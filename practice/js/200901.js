window.onload = function() {	
//1
	// const TEN = 10;
	// var a = 2, trStart = 1, trEnd = 3, wrap = 3;
	// var str = "";

	// str += "<table border = '1'>"

	// for(var tr = 1;a < TEN; a++ , tr++ ) { //<---표에 대한 변수 초기화
		
	// 	if(tr == trStart) {
	// 		str += "<tr>";
	// 		trStart += wrap; //줄바꾸기위함
	// 	}
	// 	str += "<td>" 
	// 	for(var b = 1; b < TEN; b++) {
	// 		str +=
	// 		console.log(a + "*" + )
	// 	}
	// 	str += "</td>"
	// 	if(tr == trEnd) {
	// 		str += "</tr>";
	// 		str += wrap;
	// 	}
		
	// }str += "</table>"
//2
		const TEN = 10;
	var str = "", value = "", wrap = 3, gugu = 9, trStart = 1, trEnd= 3;


	str += "<table>";

	//반복 되는 것이 뭔지 먼저 생각해보기
	//이와 같은 경우에는 곱하는 숫자(i), 곱해지는 숫자(j),테이블 행(가로 td),열(세로 tr)

	for(var i = 2, tr = 1; i <= gugu; i++, tr++) { //구구단 계산, 표 줄바꿈 계산
		if(tr == trStart) { 
			str += "<tr>";
			trStart += wrap; //false <---4가 되므로 정지
		}
		str += "<td>";
			for(var j = 1; j < TEN; j++) {
				if(i * j < 10) {
					value = "0" + i * j; //곱한 값이 한자릿수면 앞에 0 붙이기
				} else {
					value = i * j;
				}
				str += "<p>" + i + " * " + j + " = " + value + "</p>";
			}
		str +="</td>";
		if(tr == trEnd) { //tr이 3이면 tr을 닫아줌
			str += "</tr>";
			trEnd += wrap; //false <---4가 되므로 정지
		}
	}
	str += "</table>"; 

	document.body.innerHTML = str;

//3
	// var rows = 3, columns = 3 ;
	// var str = "";
	

	// str +="<table border='1'>" ;

	// for(var i = 1; i <= rows; i++){
	// 	str +="<tr>";

	// 	for(var j = 1; j <= columns; j++) {

	// 		str +="<td>";

	// 		for(var num = 2; num < 10; num++) { 
	// 			for(var i = 1; i < 10; i++) {	
	// 			str += num + "*" + i + "=" + (num * i) + "</br>"; 
	// 			}
	// 		}
	// 		str += "</td>";				
	// 	}			
	// 	str += "</tr>";
	// }
	// str += "</table>"; 
	// console.log(str);
	// document.body.innerHTML = str;

}