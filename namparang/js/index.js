$(function() {

	resize();	
	// scrollUpDown();
	titleBubbles();
	nav();
	window.onresize = function() {
		resize();
		
	};	

	$("#title>span").each(function(i) {		 
		$(this).stop().animate({
			top: '0',
			opacity: '1'
		}, 100 * (i + 0.1),'easeInOutBack');
	});


   $(window).scroll(function(e) {           
        console.log($(window).scrollTop());   
        showTitle();
        showImage();
        showFoodBox(); 
             
    });
 	goto();

 	$('.swiper-slide').ripples({
			resolution: 256,
			perturbance: 0.04
	});
 	

/*====fullScroll====*/
    //	new fullScroll({		
	//     container : 'main',
	//     sections : 'sections',
	//     animateTime : 0.7,
	//     animateFunction : 'ease',	 
	//     currentPosition: 0,
	//     displayDots: false,
	//     dotsPosition: 'left',
	//     css3: true,		
	// 	autoScrolling: false,
	// 	fitToSection: true,
	// 	scrollBar: true,
	// });


/*====swiper====*/
	var mySwiper1 = new Swiper('#view-1-swiper.swiper-container', {
	  direction: 'vertical',
	  loop: true,
	  pagination: {
	    el: '.swiper-pagination',
	  },	 
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },	 
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },
	})

});

function goto(target) {
	$("html, body, #main").animate({
			scrollTop: $(target).offset().top
		},1000);

};
function resize() {
	var wrapDiv = document.querySelectorAll(".contents-wrap");	
	wrapDiv.forEach(function(el){		
		el.style.height = window.innerHeight + "px";	
	});
	
};
function nav() {
	$("#to-top").click(function(){
		goto("#top");
		console.log(goto())
	});
	$("#1").click(function(){
		goto("#main-title");
	});
	$("#2").click(function(){
		goto("#view-1");
	});
	$("#3").click(function(){
		goto("#view-2");
	});
	$("#4").click(function(){
		goto("#view-3");
	});
	$("#5").click(function(){
		goto("#food");
	});

	$("#ticket").click(function(){
		$("#ticket-wrap").animate({
			left: '50%'				
		},1000)	
		$("#ticket-close").fadeIn(1100);
	});
	$("#ticket-close").click(function(){
		$("#ticket-wrap").animate({
			left: '-300px'				
		},1000)	
		$("#ticket-close").fadeOut(1100);
	});

};
function showImage() {
	if ($(window).scrollTop() >= 500) {
		$("#view-1 .image-area>.null-box").css({
			  height: '95%'
		});
		$("#view-1-swiper").css({
			  transform: 'scale(1)'
		});
	};
	if ($(window).scrollTop() >= 1500) {
		$("#view-2 .image-area>.null-box").css({
			  height: '95%'
		});
		$("#view-2-swiper").css({
			  transform: 'scale(1)'
		});
	};
		if ($(window).scrollTop() >= 2500) {
		$("#view-3 .image-area>.null-box").css({
			  height: '95%'
		});
		$("#view-3-swiper").css({
			  transform: 'scale(1)'
		});
	};
}

function showTitle() {
	if ($(window).scrollTop() >= 900) {			
		$("#view-1 .title-area>span").each(function(i) {		    
			$(this).stop().animate({				
				height: '60px'
			}, 100 * (i + 0.1),'easeInQuart');
		});		
		setTimeout(function() {
			$("#view-1 .title-area>span>p").each(function(i) {		
				$(this).stop().animate({						
					opacity: '1',
					top: '0'
				}, 100 * (i + 0.1),'easeOutElastic');							
			});				
		},800); clearTimeout();		
	};
	if ($(window).scrollTop() >= 1900) {		
		$("#view-2 .title-area>span").each(function(i) {		    
			$(this).stop().animate({				
				height: '60px'
			}, 100 * (i + 0.1),'easeInQuart');
		});
		setTimeout(function() {
			$("#view-2 .title-area>span>p").each(function(i) {		
				$(this).stop().animate({	
					opacity: '1',
					top: '0'
				}, 100 * (i + 0.1),'easeOutElastic');					
			});	
		},800); clearTimeout();	
	};
	if ($(window).scrollTop() >= 3000) {	
		$("#view-3 .title-area>span").each(function(i) {		    
			$(this).stop().animate({				
				height: '60px'
			}, 100 * (i + 0.1),'easeInQuart');
		});
		setTimeout(function() {
			$("#view-3 .title-area>span>p").each(function(i) {		
				$(this).stop().animate({	
					opacity: '1',
					top: '0'
				}, 100 * (i + 0.1),'easeOutElastic');					
			});	
		},800); clearTimeout();	
	};
	if ($(window).scrollTop() >= 4000) {		
		$("#food-text-wrap>span").stop().animate({
			 height: '65px'
		},800,'easeInOutBack');		
		setTimeout(function() {
			$("#food-text-wrap h1").stop().animate({
			 opacity: '1'
		},100);
			$("#food-text-wrap>span").stop().animate({
				 height: '0',
				 top:'0'
			},800,'easeInOutBack');					
		},900); clearTimeout();
	};
};

function showFoodBox() {
	if ($(window).scrollTop() >= 4000) {
		setTimeout(function() {
			$(".box").each(function(i) {		    
			$(this).stop().animate({				
				top: '0',
				opacity: '1'
			}, 600 * (i + 0.1),'easeInQuart');
		});
		},1800); clearTimeout();
	};
};

 
function scrollUpDown() {
	var oldScroll = 0;
	$(window).scroll(function(){
		var easeInQuart = $(this).attr("data-easeInQuart");
		var nowScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
		if(nowScroll < oldScroll) {
			$("#preloader").text("up");
			$("#main-title").animate({
				 height: window.innerHeight + 'px',
			},800,easeInQuart);	
		} else {
			$("#preloader").text("down");
			$("#main-title").animate({
				 height: '0',
			},800,easeInQuart);					
		}
		oldScroll = nowScroll <= 0 ? 0 : nowScroll;
	});
};


function titleBubbles() {
	//효과 위치
    var bArray = [];
    //버블 사이즈
    var sArray = [4,6,8,10];
 
    // 제목 너비 값을 bArray로 푸시
    for (var i = 0; i < $('.title-bubbles').width(); i++) {
        bArray.push(i); //배열끝에 추가
    }

    //랜덤 배열 생성
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    //새 버블을 만드는 데 사용되는 setInterval 
    setInterval(function(){         
        //랜덤 사이즈
        var size = randomValue(sArray);
        // 크기와 왼쪽 위치를 인라인으로 설정하여 div에 새 버블을 추가했습니다.
        // bArray에서 임의의 값을 얻어 left 값을 설정
        $('.title-bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');     
       
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        ); 
    }, 350);
};

