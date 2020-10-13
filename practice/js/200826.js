window.onload = function() { 
	var btnCalc = document.getElementById("btnCalc");
	btnCalc.onclick = function() {
		var age = document.getElementById("age");		
		var valAge = Number(age.value);
		var display = document.getElementById("display");
		var result = valAge;

		if(!isNaN(valAge)) {
			console.log("숫자 입력 했을 때");
			if (result >=1 && result <= 6) {
				result = "유아" + "👶";
			} else if (result >=7 && result <=19) {
				result = "청소년" + "👧";
			} else if (result >=20 && result <=34) {
				result = "청년" + "👩";
			} else if (result >=35 && result <=49) {
				result = "중년" + "👨";
			} else if (result >=50 && result <=59) {
				result = "장년" + "🧔";
			} else if (result >=60) {
				result = "노년" + "👵";
			} 

			display.innerText = "당신은" + " " + result + "입니다.";
			age.style.backgroundColor = "#58ACFA"

		} else {
			console.log("문자 입력 했을 때");
			age.value = "";
			age.placeholder = "숫자를 입력하세요";	
			age.focus();
			age.style.backgroundColor = "#F5A9BC";	
			}	
	}
}