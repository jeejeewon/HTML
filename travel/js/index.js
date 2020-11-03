$(function() {	

	$("#loading-logo").center();
	window.onbeforeunload = function () {
	  window.scrollTo(0, 0);
	}
	loading();
	resize();		
	hoverMenu();

	window.onresize = function() {
		resize();		
		BurgerNav();
		$("#loading-logo").center();
	};
	BurgerNav();
	hoverBox();	
	
	$("#bottom-nav").click(function(){		
		$("#bottom-nav-wrap").animate({
			bottom: '0'
		},300,'easeOutElastic');
	});			

	/*bottom active*/	
	$("#bottom-bar").mouseleave(function(){
		if($(window).scrollTop() + $(window).height() != $(document).height()) {
			$("#bottom-nav-wrap").animate({
				bottom: '-360px'
			},600,'easeOutElastic');
		};
	});	
	setTimeout(function() {
		/*scroll*/
		$(window).scroll(function(e) {           
			console.log($(window).scrollTop());
			// if($(window).scrollTop() + $(window).height() == $(document).height()) { alert("bottom!"); } //바닥확인		

			// showContents();					

			/*side nav*/			
			if ($(window).scrollTop() >= 800) {
					$("nav").stop().animate({
						bottom: '490px',
						opacity: '1'
					},800,'easeInQuad');
			} else {		
				$("nav").stop().animate({
						bottom: '480px',
						opacity: '0'
				},800,'easeInQuad');			
			};
			/*bottom nav*/			
			if ($(window).scrollTop() < 4040) {		
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

	$("#to-top").click(function(){
		goto("#top");
		console.log(goto())
	});
	$("#scroll").click(function(){
		goto("#page-1");
	});
	

	/*vTicker*/
 	$(function() {
		$('#notice').vTicker();
	});

	/*AOS*/
	AOS.init({ 
	  offset: 200, 
	  delay: 0,
	  duration: 800, 
	  easing: 'ease-in-out', 
	  once: true, 
	  mirror: false,
	});
	
	/*swiper*/
	var eventSwiper = new Swiper('#event-swiper', {
	  direction: 'horizontal',
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
	  direction: 'horizontal',
	  loop: true,	 
	  navigation: {
	    nextEl: '#hotel-swiper-next',
	    prevEl: '#hotel-swiper-prev',
	  },
	  	breakpoints: { 
			600: { 
	          slidesPerView: 2,
	          spaceBetween: 20,
	        }	        
	    }
	})

	var reviewSwiperPic = new Swiper('#review-swiper', {	  
	  direction: 'horizontal',
	  loop: true,	
	  allowTouchMove: false		  
	})
	var reviewSwiperTxt = new Swiper('#review-swiper', {	  
	  direction: 'horizontal',
	  loop: true,	 
	  allowTouchMove: false,
	  navigation: {
	    nextEl: '#review-swiper-next',
	    prevEl: '#review-swiper-prev',
	  }
	})
	var next = document.querySelector("#review-swiper-next");
	  next.onclick = function() {
	    reviewSwiperPic.slideNext(1000);
	  }
	var prev = document.querySelector("#review-swiper-prev");
	  prev.onclick = function() {
	    reviewSwiperPic.slidePrev(1000);
	  }
	

}); //window로드끝


function goto(target) {
	$("html, body").animate({
		scrollTop: $(target).offset().top
	},1000);
};

function resize() {
	var wrapDiv = document.querySelectorAll("#main-title");	
	wrapDiv.forEach(function(el){		
		el.style.height = window.innerHeight + "px";	
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
							}, 300,'easeOutElastic');					
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
		$("#loading").delay(900).animate({		
			height: '0'
		},800,'easeInCubic');
		setTimeout(function() {
			$("#bottom-nav-wrap").animate({
				right: '0'			
			},700,'easeInQuad');	
			$("#logo-area").animate({			
				 left: '0'			
			},700,'easeInQuad');				
		},3800);
		$("#nav-button").delay(4500).animate({			
			 left: '90px'			
		},1500,'easeInQuad');
		$("#plan").delay(4200).animate({			
			 left: '0'			
		},900,'easeInQuad');			
		$("#scroll").delay(3100).animate({
			opacity: '1',
			bottom: '120px'
		},1200,'easeInOutBack');		
	},600); 
	setTimeout(function(){
		$("body").css({
			overflowY: 'scroll'
		});
	},5800);
}; 

function hoverBox() {
	var timer = [];
	$(".popular-box").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					el.css({
					    boxShadow: '0px 0px 300px rgba(0,0,0,0.6) inset'
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
		}, 300,'');
		clearTimeout(timer[i]);
		});
	});

	$(".swiper-container").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {					
					el.find(".my-swiper-prev").stop().animate({
						opacity: '1'
						},300, 'easeOutQuart');
					el.find(".my-swiper-next").stop().animate({
						opacity: '1'
					},300, 'easeOutQuart');										
				}, 300);					
			})($(this));
		}, function() {		
		$(".my-swiper-prev").stop().animate({	
			opacity: '0'			
		}, 300,'easeOutQuart');
		$(".my-swiper-next").stop().animate({	
			opacity: '0'				
		}, 300,'easeOutQuart');
		clearTimeout(timer[i]);
		});
	});				
};

function BurgerNav() {
	var mediaScreenMo = window.matchMedia( '( max-width: 500px )' );	
	if ( mediaScreenMo.matches == true ) {
		$("#top-nav-wrap").css({
			top: '-280px'
		});	
	}
	 else {
		$("#top-nav-wrap").css({
			top: '-100px'
		});	
	};

	$("#burger-wrap").click(function(){	
		if ( mediaScreenMo.matches == true ) {			
			$("#top-nav-wrap").animate({
					top: '0'
			},300,'easeOutQuart');
			$("#nav-bar").mouseleave(function(){
				$("#top-nav-wrap").stop().animate({
						top: '-280px'
				},300,'easeOutQuart');	
			});
		} else {			
			$("#top-nav-wrap").animate({
					top: '0'
			},300,'easeOutQuart');
			$("#nav-bar").mouseleave(function(){
				$("#top-nav-wrap").stop().animate({
						top: '-100px'
				},300,'easeOutQuart');	
			});
		};		
	});
};
