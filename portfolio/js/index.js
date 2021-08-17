
$(function() {

	moveCircle();
	background();	

	$("#move-circle").fadeIn(800);	
	$("#home>h2>span").each(function(i) {
		$(this).stop().animate({
			top: '0',
			opacity: '1'
		}, 600 * (i + 0.5));
	});
	popUp();

	/*swiper*/

	var illustSwiper = new Swiper('#illust-swiper', {
	  // Optional parameters
	  direction: 'horizontal',
	  loop: true,
	  // If we need pagination
	  pagination: {
	    el: '#illust-pagination',
	    clickable: true
	  }	 
	});


	var iSpeed = 1;  
	var wrapSwiper = new Swiper('#wrap', {
		workSlidesProgress: true,  
		direction: 'vertical', //vertical horizontal
		allowTouchMove: false,
		speed: 800,
		parallax: true,		
		effect: 'slide', 
		 keyboard: {
		    enabled: false,
		    onlyInViewport: false,
		 },		
		mousewheel: {
		    invert: false
		},
		on: {slideChangeTransitionEnd: function(){
				// console.log(this.activeIndex); //슬라이드 번호 확인

				$("#scroll").fadeOut(800);
				$("#contact-me").fadeIn(800);
				removeAllClass()

				if(this.activeIndex == 0){					
					$("li:nth-child(1)>span").addClass("active");
					$("#scroll").fadeIn(800);			
				};
				if(this.activeIndex == 1){					
					$("li:nth-child(2)>span").addClass("active");
				};
				if(this.activeIndex == 2){					
					$("li:nth-child(3)>span").addClass("active");
				};
				if(this.activeIndex == 3){					
					$("li:nth-child(4)>span").addClass("active");
				};				
				if(this.activeIndex == 4){					
					$("li:nth-child(5)>span").addClass("active");
					$("#contact-me").fadeOut(800);
				};
			},
		 }
	});

	$("li").click(function() {
	 	removeAllClass();
	 	$("#contact-me").fadeIn(800);
            $("#scroll").fadeOut(800);
		if($(this).text() == "home") {
            wrapSwiper.slideTo( $('#home').index(),1000, false); //(index, speed, runCallbacks);
            $("li:nth-child(1)>span").addClass("active");
            $("#scroll").fadeIn(800);
	    };
	    if($(this).text() == "web_1") {
            wrapSwiper.slideTo( $('#web-1').index(),1000, false);
            $("li:nth-child(2)>span").addClass("active"); 
	    };
	    if($(this).text() == "web_2") {
            wrapSwiper.slideTo( $('#web-2').index(),1000, false);
            $("li:nth-child(3)>span").addClass("active");
	    };
	    if($(this).text() == "etc") {
            wrapSwiper.slideTo( $('#etc').index(),1000, false);
            $("li:nth-child(4)>span").addClass("active");
	    };	    
	    if($(this).text() == "contact") {
            wrapSwiper.slideTo( $('#contact').index(),1000, false);
            $("li:nth-child(5)>span").addClass("active");
			$("#contact-me").fadeOut(800);
	    };
	});
}); //window 끝

function removeAllClass() {
	$("li:nth-child(1)>span, li:nth-child(2)>span, li:nth-child(3)>span, li:nth-child(4)>span, li:nth-child(5)>span, li:nth-child(6)>span").removeClass("active");
};

function moveCircle() {
	function moveCircleResult(x) { 
		var positionLeft = x.clientX;
		var positionTop = x.clientY;
		document.getElementById("move-circle").style.left = positionLeft - 5 + "px";
		document.getElementById("move-circle").style.top = positionTop - 5 +"px"; 
	} 
	if (document.addEventListener) { 
		document.addEventListener("mousemove", moveCircleResult); 
	} else if (document.attachEvent) {
		document.attachEvent("onmousemove", moveCircleResult); 
		//attachEvent는 IE8이하와 오페라에서 사용
	};
	var timer = [];
	$("#move-circle").each(function(i) {
		timer[i] = null;
		$("button, ul, #contact-me, #contact-wrap>div").hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					$("#move-circle").css({
						zIndex: '1'						
				       });   	
					 $("#move-circle").animate({
							width: '60px',
							height: '60px',
							backgroundColor: 'translate',
							border: '1px solid #000'
				       }, 300);   	
				}, 100);					
			})($(this));
		}, function() {	
			$("#move-circle").css({
				zIndex: '2'						
			});  
			$("#move-circle").animate({
				width: '9px',
				height: '9px',
				backgroundColor: '#000',
				border: '0px solid #000'
			}, 100);					
			clearTimeout(timer[i]);
		});
	});		
};	

function background() {
	var maxDocWidth = maxDocHeight = 0;
	var minDivSize = 50, maxDivSize = 500;
	var minDivPadding = 5, maxDivPadding = 25;
	var count = 0;
	$(function() {
		//카페24일 경우
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
			if(count == 11) {
				clearInterval(timer);
			}
		}, 2000);
		// console.log(maxDocWidth + " : " + maxDocHeight);
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
};

function popUp() {
	document.getElementById("etc-img-1").onclick= function() {
		window.open('teshima-artmuseum/index.html') 
	};
	document.getElementById("etc-img-2").onclick= function() {
		window.open('watcha/index.html') 
	};
	document.getElementById("etc-img-3").onclick= function() {
		window.open('https://youtu.be/rP34RtCSYzk') 
	};	
	document.getElementById("etc-img-4").onclick= function() {
		$("#illust-popup").css({
			zIndex: '10'
		});
		$("#illust-popup").animate({
			opacity: '1',	
			top: '50%'
		},600,'easeOutExpo');
		$("#wrap-black").css({
			zIndex: '9'
		});
		$("#wrap-black").animate({
			opacity: '1'	
		},800);
	};
	$("#illust-popup-close").click(function() {	
		$("#illust-popup").animate({
			opacity: '0',			
			top: '55%'
		},800,'easeOutExpo');	
		$("#wrap-black").animate({
			opacity: '0'	
		},800);

		setTimeout(function(){
			$("#illust-popup").css({			
				zIndex: '-1'
			});
			$("#wrap-black").css({			
				zIndex: '-1'
			});
		},800);
	});
};
