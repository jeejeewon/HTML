$(function() {
	$("#loader").fadeOut(500);
	$("#wrap").fadeIn(500);	


	$("#home>h2>span").each(function(i) {
			$(this).stop().animate({
				top: '0',
				opacity: '1'
			}, 800 * (i + 0.5));
		});


	var iSpeed = 1;  
	var mySwiper = new Swiper('.swiper-container', {
		watchSlidesProgress: true,  
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
				console.log(this.activeIndex); //슬라이드 번호 확인
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
				};
				if(this.activeIndex == 5){					
					$("li:nth-child(6)>span").addClass("active");
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
            mySwiper.slideTo( $('#home').index(),1000, false); //(index, speed, runCallbacks);
            $("li:nth-child(1)>span").addClass("active");
            $("#scroll").fadeIn(800);		
	    };
	    if($(this).text() == "about") {
            mySwiper.slideTo( $('#about').index(),1000, false);
            $("li:nth-child(2)>span").addClass("active"); 
	    };
	    if($(this).text() == "watch") {
            mySwiper.slideTo( $('#watch').index(),1000, false);
            $("li:nth-child(3)>span").addClass("active");
	    };
	    if($(this).text() == "process") {
            mySwiper.slideTo( $('#process').index(),1000, false);
            $("li:nth-child(4)>span").addClass("active");
	    };
	    if($(this).text() == "gallery") {
            mySwiper.slideTo( $('#gallery').index(),1000, false);
            $("li:nth-child(5)>span").addClass("active");
	    };
	    if($(this).text() == "contact") {
            mySwiper.slideTo( $('#contact').index(),1000, false);
            $("li:nth-child(6)>span").addClass("active");
			$("#contact-me").fadeOut(800);
	    };
	});

	function removeAllClass() {
		$("li:nth-child(1)>span, li:nth-child(2)>span, li:nth-child(3)>span, li:nth-child(4)>span, li:nth-child(5)>span, li:nth-child(6)>span").removeClass("active");
	};

});

