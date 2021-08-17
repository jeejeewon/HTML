	function loading() {
		var img = document.images; //문서 내의 모든 이미지
		var totalPers = 100;
		var cnt = 0;
		var totalImg = img.length;
		var loader = document.getElementById("loader");
		var bar = document.getElementById("bar");
		var counter = document.getElementById('counter');
		var main = document.getElementById('main');
		console.log(img);
		//이미지 로드 여부 체크
		for(var i = 0; i < totalImg; i++) {
			var tImg = new Image(); //img 태그 생성
			console.log(tImg);
			tImg.onload = imgLoader; //연산
			tImg.src = img[i].src;
		}
		function imgLoader() {
			cnt++;
			var pers = totalPers/totalImg*cnt;
			bar.style.width = pers + '%';
			counter.innerText = pers + '%';
			if(cnt == totalImg) {
				loader.style.opacity = 0;
				main.style.display = 'block';
				setTimeout(function() {
					loader.style.display = 'none';
					// main.style.opacity = 1;
				}, 1200);
			}
		}
	}
	document.addEventListener('DOMContentLoaded', loading);