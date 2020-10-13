var arrSi = ["서울특별시", "부산직할시", "울산광역시", "경상남도"];
var arrGu = [
			["강남구", "강동구", "노원구", "동대문구"],
			["강서구", "부산진구", "연제구", "중구"],
			["남구", "동구", "북구", "중구"],
			["거제시", "김해시", "양산시", "통영시"]	
		];
var arrDong = [
			[
				["개포1동", "논현1동", "대치1동", "도곡1동"],
				["강일동", "고덕1동", "길동", "둔촌1동"],
				["공릉1동", "상계1동", "월계1동", "중계1동"],
				["답십리1동", "신설동", "이문1동", "휘경1동"],
			],
			[
				["강동동", "녹산동", "대저1동", "대항동"],
				["가야1동", "개금1동", "당감1동", "범전동"],
				["거제1동", "연산1동", "연산8동", "망미1동"],
				["광복동1가", "남포동1가", "대창동1가", "보수동1가"],	
			],
			[
				["개운동", "고사동", "남화동", "달동"],
				["대송동", "방어동", "서부동", "일산동"],
				["가대동", "달천동", "매곡동", "산하동"],
				["교동", "남외동", "다운동", "반구1동"],
			],
			[
				["고현동", "남부면", "덕포동", "둔덕면"],
				["강동", "내동", "삼정동", "흥동"],
				["남부동", "다방동", "매곡동", "유산동"],
				["광도면", "당동", "욕지면", "한산면"],
			]
		];
$(function() {
	var si = $("#si");
	var gu = $("#gu");
	var dong = $("#dong");
	var choSi = choDong = 0;
	for(var i = 0; i < arrSi.length; i++) {
		si.append("<option>" + arrSi[i] + "</option>");
	}

	//change() 메소드는 해당하는 요소의 value에 변화가 생길 경우 이를 감지하여 등록된 콜백함수를 동작시킨다. 
	//해당 코드는 input, textarea, select 태그에 동작한다.

	//사용자가 고르는 값(뭘 선택할지 모르니 훑어봄)
	si.change(function() {
		for(var i = 0; i < arrSi.length; i++) {
			if($(this).val() == arrSi[i]) {
				choSi = i;
				break;
			} else {
				choSi = null;
			}
		}
		gu.empty();
		gu.append("<option>구를 선택하세요.</option>");
		if(choSi != null) {
			for(i = 0; i < arrGu[choSi].length; i++) {
				gu.append("<option>" + arrGu[choSi][i] + "</option>");
			}
		}
		dong.empty();
		dong.append("<option>동을 선택하세요.</option>");
	});

	gu.change(function() {
		for(var i = 0; i < arrGu[choSi].length; i++) {
			if($(this).val() == arrGu[choSi][i]) {
				choDong = i;
				break;
			} else {
				choDong = null;
			}
		}
		dong.empty();
		dong.append("<option>동을 선택하세요.</option>");
		if(choDong != null)
		for(i = 0;  i < arrDong[choSi][choDong].length; i++) {
			dong.append("<option>" + arrDong[choSi][choDong][i] + "</option>")
		}
	});
});	
	


