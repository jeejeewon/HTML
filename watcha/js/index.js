$(function() {
	
    $(window).scroll(function(e) {           
        console.log($(window).scrollTop());   
        showHeader()             
    });

	$("button.active").click(function(e){
		e.preventDefault();	   
		$("#popup").slideDown(800);	
		if($(window).width() < 600) { 
			$("#popup").animate({
				height: '95%'			
			},800, 'easeInQuart');
		} else {
			$("#popup").animate({
				height: '80%'						
			},800, 'easeInQuart');
		}
		$("#popup-close").show(500);
		// $("#popup").fadeIn(800);
		$("#black").fadeIn(500);		
		var popupSwiper = new Swiper('#popup-swiper', {		  
				scrollbar: {
		        el: '.swiper-scrollbar',
		        hide: true,
			    },
				allowTouchMove: true,
				spaceBetween: 30,
				slidersPerView: 1,
				speed: 300,		
				loop: false,					    
		});
		$("body").css({
			overflow: 'hidden'
		});	
		$("video").trigger("pause");		
		setTimeout(function() {
			$("div[class*=popup-thumb-img-]").each(function(i) {		
				$(this).stop().animate({	
					opacity: '1',
					top: '0'
				}, 600 * (i + 0.5), 'easeInOutBack');					
			});	
		},800, 'easeInOutBack'); clearTimeout();	
	});	

	$("#popup-close").click(function(){		
		$("#popup").animate({
			height: '0',		
		},800);
		$("#popup").hide(200);
		$("#popup-close").hide(500);
		$("#black").fadeOut(500);
		$("div[class*=popup-thumb-img-]").css({
			opacity: '0',
			top: '20px'
		});
		$("body").css({
			overflow: 'scroll'
		});	
		$("video").trigger("play");
	});		
	
	hoverProfile()
	hoverThumb()


/*====swiper====*/
	var swiper = new Swiper('#video-swiper', {
	 	loop:true,
	 	speed: 800,
	 	effect: 'fade',
	 //    autoplay: {
	 //    	delay: 5000,
	 //    	disableOnInteraction: true,
		// },
		virtualTranslate: true,
		fadeEffect: {
		    crossFade: true
		},
		slidersPerView: 1,
	    pagination: {
	      el: '.swiper-pagination',
	      clickable: true,        
	    },
	    // on: {slideChangeTransitionEnd: function(){
	    	    
	    // }
    });
   

	var swiper1 = new Swiper('#s-1', {		  
		scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
	    },
		allowTouchMove: true,
		spaceBetween: 30,
		speed: 300,		
		// loop: true,
		// pagination: {
		// el: '.swiper-pagination',
		// clickable: true,
		// },			
		navigation: {
		nextEl: '#s-1-next',
		prevEl: '#s-1-prev',
		},
		breakpoints: { 
	        425: { 
	          slidesPerView: 2,
	          spaceBetween: 20,
	        },
	        600: { 
	          slidesPerView: 3,
	          spaceBetween: 20,
	        },
		    768: {
	          slidesPerView: 4,
	          spaceBetween: 30,
	        },
	        1024: {
	          slidesPerView: 5,
	          spaceBetween: 30,
	        }, 
	        1440: {
	          slidesPerView: 6,
	          spaceBetween: 30,
	        }         

        },        
	    
	});
	var swiper2 = new Swiper('#s-2', {
		allowTouchMove: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 300,
		// loop: true,
		// pagination: {
		// el: '.swiper-pagination',
		// clickable: true,
		// },			
		navigation: {
		nextEl: '#s-2-next',
		prevEl: '#s-2-prev',
		},
		breakpoints: { 
	        425: { 
	          slidesPerView: 2,
	          spaceBetween: 20,
	        },
	        600: { 
	          slidesPerView: 3,
	          spaceBetween: 20,
	        },
		    768: {
	          slidesPerView: 4,
	          spaceBetween: 30,
	        },
	        1024: {
	          slidesPerView: 5,
	          spaceBetween: 30,
	        }, 
	        1440: {
	          slidesPerView: 6,
	          spaceBetween: 30,
	        }         
        },	      
	});
	var swiper3 = new Swiper('#s-3', {
		allowTouchMove: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 300,
		// loop: true,
		// pagination: {
		// el: '.swiper-pagination',
		// clickable: true,
		// },			
		navigation: {
		nextEl: '#s-3-next',
		prevEl: '#s-3-prev',
		},
		breakpoints: { 
	        425: { 
	          slidesPerView: 2,
	          spaceBetween: 20,
	        },
	        600: { 
	          slidesPerView: 3,
	          spaceBetween: 20,
	        },
		    768: {
	          slidesPerView: 4,
	          spaceBetween: 30,
	        },
	        1024: {
	          slidesPerView: 5,
	          spaceBetween: 30,
	        }, 
	        1440: {
	          slidesPerView: 6,
	          spaceBetween: 30,
	        }         
        }	      
	});

});

function hoverThumb() {
	var timer = [];
		$("div[id*=s-]>.swiper-wrapper>.swiper-slide").each(function(i) {
			timer[i] = null;
			$(this).hover(function() {
				(function(el) {
					timer[i] = setTimeout(function() {
						// console.log(el.children('.thumb_title'));
						el.css({			
							transform: 'scale(1.5)',
							transition: '0.6s',
							zIndex:'4',
							top: '10px',
							boxShadow: '1px 1px 10px rgba(0,0,0,0.5)'
						}).find('.thumb_title,.thumb_active, .thumb_active>i').addClass('active');						
					}, 1000);					
				})($(this));
			}, function() {			
				$(this).find('.thumb_title,.thumb_active, .thumb_active>i').removeClass('active');	
				$(this).css({
					transition: '0.6s',
					transform: 'scale(1.0)',
					zIndex:'0',
					top: '0'
				});
				clearTimeout(timer[i]);
			});
		});				
};

function showHeader() {
	if ($(window).scrollTop() >= 1) {
		$("header").css({
			position: 'fixed',
			backgroundColor: '#000'	
		});
	} else {
		$("header").css({
			position: 'relative', 
			backgroundColor: 'transparent'		
		});
	};
};

function hoverProfile() {
	$(".profile").each(function(i) {	
		$(this).hover(function(){			
			 $(this).children('ul').stop().slideDown();
		},function() {
			$(this).children('ul').stop().delay(200).slideUp()			
		}); 
	});
};  