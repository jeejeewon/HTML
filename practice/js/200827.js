window.onload = function() {
	var btnCalc = document.getElementById("btnCalc");
	btnCalc.onclick = function() {		

		var ko = document.getElementById("ko");
		var en = document.getElementById("en");
		var math = document.getElementById("math");

		var valKo = Number(ko.value);
		var valEn = Number(en.value);
		var valMath = Number(math.value);

		var display1 = document.getElementById("display1");
		var display2 = document.getElementById("display2");
		var display3 = document.getElementById("display3");
		var display4 = document.getElementById("display4");
		var dis_rank = document.getElementById("dis_rank");
		var wrap = document.getElementById("wrap");

		// var sum = 0, avg =0, grade = "";
		// 숫자값 초기화는 0 , 문자는 공백

		result = "";

		// if(!isNaN(valKo) && !isNaN(valEn) && !isNaN(valMath)) {
		// 	console.log("숫자 입력했을 때");	
		// 	dis_wrap.classList.add("onclick");
		// } else 
		//처리 순서대로 입력해야함!! (걸러낼 순서대로 써야함)
		//숫자, 문자 여부 -> 숫자 범위 -> 숫자가 아닐 때 뜨는 화면 먼저 표시  
		if (isNaN(valKo) || valKo == "" || valKo > 100 || valKo < 0) {			
			ko.value = "";
			ko.placeholder = "국어 필수(100>=x>=0)";
			ko.focus();
		} else if (isNaN(valEn) || valEn == "" || valEn > 100 || valEn < 0){			
			en.value = "";
			en.placeholder = "영어 필수(100>=x>=0)"
			en.focus();
		} else if (isNaN(valMath) || valMath == "" || valMath > 100 || valMath < 0){			
			math.value = "";
			math.placeholder = "수학 필수(100>=x>=0)"
			math.focus();
		} else {
			//위의 값이 아니면 아래 내용 표시
			if(valKo > valEn && valKo > valEn) {
				result = "국어" + "-" + valKo;
			} else if(valEn > valKo && valEn > valMath) {
				result = "영어" + "-" + valEn;
			} else {
				result = "수학" + "-" + valMath;
			}
			display1.innerText = "최고" + " " + "점수" + " " + ":" + " " + result;

			if (valKo < valEn && valKo < valEn) {
				result = "국어" + "-" + valKo;
			} else if(valEn < valKo && valEn < valMath){
				result = "영어" + "-" + valEn;
			} else {
				result = "수학" + "-" + valMath;
			}			
			display2.innerText = "최저" + " " + "점수" + " " + ":" + " " + result;

			//합계
			var total = valKo + valEn + valMath;		
			display3.innerText = "합계" + ":" + total;
			
			//평균		
			var avg = total / 3;	
			display4.innerText = "평균" + ":" + avg;
			
			//등급
			var max = 100, min = 0; 
			var rank = total / 3;
			if (rank <= max || min <= 0) {
				if (rank <= 59 ) {
					wrap.style.backgroundColor = "#F5A9A9";
					result = "F";	
				} else if (rank >= 60 && rank <= 69) {
					wrap.style.backgroundColor = "#F5BCA9";	
					result = "D";
				} else if (rank >= 70 && rank <= 79) {
					wrap.style.backgroundColor = "#F5D0A9";
					result = "C";
				} else if (rank >= 80 && rank <= 89) {
					wrap.style.backgroundColor = "#F3E2A9";
					result = "B";
				} else if (rank >= 90 && rank <= 95) {
					wrap.style.backgroundColor = "#F2F5A9";
					result = "A";
				} else if (rank >= 96 && rank <= 100) {
					wrap.style.backgroundColor = "#E1F5A9";
					result = "A+";
				} 
				dis_rank.innerText = result;						
			} 
			//result 값 구분하기 쉽게 변수 사용하기
			//클래스 추가 x --> background-color 사용해서 바꿀 수 있음
			//이미지 추가도 마찬가지
		}
		
	} //클릭이벤트 닫음
	
}

	

