$(function() {	

	$("#loading-logo").center();
	window.onbeforeunload = function () {
	  window.scrollTo(0, 0);
	}
	loading();
	resize();	
	// scrollUpDown();	
	nav();
	hoverMenu();
	window.onresize = function() {
		resize();				
	};

	/*burger nav*/
	$("#burger-wrap").click(function(){		
		$("#top-nav-wrap").animate({
			top: '0'
		},600);
		$("#top-nav-wrap").mouseleave(function(){
			$("#top-nav-wrap").animate({
				top: '-100px'
			},600);
		});		 
	});
	$("#bottom-nav").click(function(){		
		$("#bottom-nav-wrap").animate({
			bottom: '0'
		},600,'easeOutElastic');
	});

	/*bottom active*/	
	$("#bottom-bar").mouseleave(function(){
		if($(window).scrollTop() + $(window).height() != $(document).height()) {
			$("#bottom-nav-wrap").animate({
				bottom: '-300px'
			},600,'easeOutElastic');
		};
	});	
	setTimeout(function() {
		/*scroll*/
		$(window).scroll(function(e) {           
			console.log($(window).scrollTop());
			// if($(window).scrollTop() + $(window).height() == $(document).height()) { alert("bottom!"); } //바닥확인		

			showContents();			

			/*side nav*/			
			if ($(window).scrollTop() >= 800) {
					$("#to-top").stop().animate({
						bottom: '0'
					},800,'easeInQuad');
			} else {		
				$("#to-top").stop().animate({
						bottom: '-55px'
					},800,'easeInQuad');			
			};

			/*bottom nav*/			
			if ($(window).scrollTop() < 900) {
				$("#bottom-nav-wrap").stop().animate({			
					bottom: '-460px',						
				},300,'easeInQuad');	
			} 
			else if ($(window).scrollTop() >= 900 && $(window).scrollTop() < 4040) {		
				$("#bottom-nav-wrap").stop().animate({				
					bottom: '-360px'						
				},300,'easeInQuad');						
			};
			if($(window).scrollTop() + $(window).height() != $(document).height()) {	
				$("#bottom-nav-wrap").css({				
					position: 'fixed'			
				});											
			} else {	
				$("#bottom-nav-wrap").stop().animate({				
					bottom: '0'						
				},300,'easeInQuad');							
				setTimeout(function() {	
					$("#bottom-nav-wrap").css({					
						position: 'absolute'			
					});	
				},300);									
			}; 							        
		});			
	},4000); 
	/*vTicker*/
 	$(function() {
		$('#notice').vTicker();
	});	
	
	/*swiper*/
	var eventSwiper = new Swiper('#event-swiper', {
	  direction: 'vertical',
	  loop: true,	  
	  pagination: {
	    el: '#event-swiper-pagination',
	  },	 
	  navigation: {
	    nextEl: '#event-swiper-next',
	    prevEl: '#event-swiper-prev',
	  }	  
	})

	var hotelSwiper = new Swiper('#hotel-swiper', {	  
	  direction: 'vertical',
	  loop: true,	  
	  pagination: {
	    el: '#hotel-swiper-pagination',
	  },	 
	  navigation: {
	    nextEl: '#hotel-swiper-next',
	    prevEl: '#hotel-swiper-prev',
	  }
	})

	var countSwiper = new Swiper('#count-swiper', {	  
	  direction: 'vertical',
	  loop: true,	  
	  pagination: {
	    el: '#count-swiper-pagination',
	  },	 
	  navigation: {
	    nextEl: '#count-swiper-next',
	    prevEl: '#count-swiper-prev',
	  }
	})

	goto();	
	hoverBox();

 }); //window로드끝


function goto(target) {
	$("html, body, #main").animate({
			scrollTop: $(target).offset().top
		},1000);
};

function resize() {
	var wrapDiv = document.querySelectorAll("#main-title");	
	wrapDiv.forEach(function(el){		
		el.style.height = window.innerHeight + "px";	
	});	
};

function nav() {
	$("#to-top").click(function(){
		goto("#top");
		console.log(goto())
	});
	$("#scroll").click(function(){
		goto("#page-1");
	});
};

function showContents() {
	if ($(window).scrollTop() >= 800) {			    
		$("#intro-box-wrap").animate({				
			 opacity: '1'
		}, 600);		
		$("#intro-box-wrap .intro-box").each(function(i) {		
			$(this).delay(600).animate({						
				opacity: '1',
				top: '0'
			}, 800 * (i + 0.1));							
		});
		$("#page-2").delay(900).animate({				
			 	opacity: '1',
				top: '0'
		}, 600);					
	
	};
	if ($(window).scrollTop() >= 1400) {
		$("#page-3").animate({				
		 	opacity: '1',
			top: '0'
		}, 800);		
	};
	if ($(window).scrollTop() >= 2300) {	
		$("#page-4").animate({				
		 	opacity: '1',
			top: '0'
		}, 800);	
	};
	if ($(window).scrollTop() >= 2700) {
		$("#page-5").animate({				
			 	opacity: '1',
				top: '0'
		}, 800);
		/*count*/	
		setTimeout(function() {		
			var countValue = document.querySelectorAll(".countValue");		
			var random = getRandom();										
			for(var i  = 0; i < countValue.length; i++) {
				counter(countValue[i], 0, random[i], 1000);
			}; 	
		},800); clearInterval()	;						
	};
	if ($(window).scrollTop() >= 3100) {
		$("#page-6").animate({				
			 	opacity: '1',
				top: '0'
		}, 800);		
	};
	if ($(window).scrollTop() >= 3900) {
		$("#page-7").animate({				
			 	opacity: '1',
				top: '0'
		}, 800);		
		$("#page-8").animate({				
			 	opacity: '1',
				top: '0'
		}, 800);		
	};	//스위치로 바꾸기..	

};

function scrollUpDown() { //스크롤업다운체크용
	var oldScroll = 0;
	$(window).scroll(function(){		
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

function hoverMenu() {
	var timer = [];
	$("#burger-wrap").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					$("#burger-text").stop().animate({
							right: '-45px'
						},300);
						$(".icon-bar:nth-child(1)").stop().animate({
							top: '-5px'
						},300);
						$(".icon-bar:nth-child(3)").stop().animate({
							top: '17px'
						},300);
						setTimeout(function() {
							$(".icon-bar").stop().animate({	
								width: '130%'					
							}, 600,'easeOutElastic');					
						},400); clearTimeout();								
				}, 300);					
			})($(this));
		}, function() {	
		$(".icon-bar").stop().animate({	
				width: '100%'					
			}, 300,'easeOutElastic');					
			setTimeout(function() {
				$("#burger-text").stop().animate({
				right: '-40px'
				},300);
				$(".icon-bar:nth-child(1)").stop().animate({
					top: '0'
				},300);
				$(".icon-bar:nth-child(3)").stop().animate({
					top: '12px'
				},300);			
			},400); clearTimeout();					
			clearTimeout(timer[i]);
		});
	});				
};

jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
	$(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
	$(window).scrollLeft()) + "px");
	return this;
}

function loading() {
	$("#loading").each(function(){
		setTimeout(function() {		
			$("#loading").css({
				backgroundColor: '#009bdf'
			});
		},500); 
	});
	$("#loading-wave").delay(500).animate({
		opacity: '0'
	});  //#load되면 사라질 것
	setTimeout(function() {
		$("#loading-logo>span:nth-child(1)").delay(300).animate({
			  top: '0'
		},600,'easeInOutBack');
		$("#loading-logo>span:nth-child(2)").delay(900).animate({
			  top: '0'
		},600,'easeInOutBack');	
		$("#loading").delay(1000).animate({
			opacity: '0.5',			
		},600,'easeInCubic');	
		$("#loading").delay(800).animate({		
			height: '0'
		},800,'easeInCubic');	
			$("header").delay(3800).animate({
			opacity: '1',
			 left: '0'			
		},900,'easeInQuad');		
		$("#scroll").delay(3100).animate({
			opacity: '1',
			bottom: '120px'
		},1200,'easeInOutBack');		
	},600); 
};	

function hoverBox() {
	var timer = [];
	$(".popular-box").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					el.css({
					    boxShadow: '0px 0px 300px rgba(0,0,0,0.5) inset'
					});
					el.find(".pin").stop().animate({
						right: '10px'
						},300, 'easeOutQuart');
					el.find(".info").stop().animate({
						bottom: '10px',
						left: '10px'
					},300, 'easeOutQuart');														
				}, 300);					
			})($(this));
		}, function() {	
		$(".popular-box").css({
			boxShadow: '0px 0px 300px rgba(0,0,0,0) inset'
		});
		$(".pin").stop().animate({	
			right: '-75px'					
		}, 300,'easeOutQuart');
		$(".info").stop().animate({	
			bottom: '-75px',
			left: '-55px'					
		}, 300,'easeOutQuart');
		clearTimeout(timer[i]);
		});
	});				
};

function counter(el ,start, end, duration) {
	var finish = 0;
	var increment = end > start ? 1 : -1;
	var rang = end - start;
	var step  = Math.abs(Math.floor(duration/rang)); //end까지의 간격(속도)를 동일하게 계산
	var timer = setInterval(function(){
		el.innerHTML = start;
		if(start == end) {
			clearInterval(timer);
			finish++;				
		}
		start += increment;
	}, step)
};

function getRandom() {
	var max = 4; 
	var random = new Array(max); 
	var counter = 0;
	var flag = true; 
	while (counter < max) {
		var num = Math.floor(Math.random()*999) + 1
		for(var i = 0; i < counter; i++) { 
			if ((random[i]) == num) { 
				flag = false;
			}
		}
		if(flag) { 
			random[counter] = num;
			counter++;		
		}
		flag = true; 
	}	
	return random;
};



	


