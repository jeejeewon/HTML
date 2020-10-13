window.onload = function() {
	var btnCalc = document.getElementById("btnCalc");
	btnCalc.onclick = function() {
		var season = document.getElementById("season");
		var bg1 = document.getElementById("bg1");
		var bg2 = document.getElementById("bg2");
		var bg3 = document.getElementById("bg3");
		var bg4 = document.getElementById("bg4");			

		var body = document.body;

		switch(season.value) {
			case "봄":	
				bg1.classList.add("onclick");
				bg2.classList.remove("onclick");
				bg3.classList.remove("onclick");
				bg4.classList.remove("onclick");					
				break;
			case "여름":
				bg1.classList.remove("onclick");
				bg2.classList.add("onclick");
				bg3.classList.remove("onclick");
				bg4.classList.remove("onclick");
				break;
			case "가을":
				bg1.classList.remove("onclick");
				bg2.classList.remove("onclick");
				bg3.classList.add("onclick");
				bg4.classList.remove("onclick");
				break;
			case "겨울":
				bg1.classList.remove("onclick");
				bg2.classList.remove("onclick");
				bg3.classList.remove("onclick");
				bg4.classList.add("onclick");
				break;
			default:				
				season.value = "";
				season.classList.add("error");
				season.placeholder = "봄, 여름, 가을 겨울, 중 하나를 입력하세요";				
				season.focus();
				break;				

		}

	}
}