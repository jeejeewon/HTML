$(function() {

	/*LeaderLine*/
		// var point1 = document.querySelector("#point-1");
		// var point2 = document.querySelector("#point-2");
		// var point3 = document.querySelector("#point-3");
		// new LeaderLine(point1,point2,{dash: {animation: true}});
		// new LeaderLine(point2,point3,{dash: {animation: true}});

	resize();	
	nav();
	window.onresize = function() {
		resize()		
	};	

	$("#title>span").each(function(i) {	
	    var easeInOutBack = $(this).attr("data-easeInOutBack");
		$(this).stop().animate({
			top: '0',
			opacity: '1'
		}, 100 * (i + 0.1),easeInOutBack);
	});

   $(window).scroll(function(e) {           
        console.log($(window).scrollTop());   
        showTitle()             
    });
 	goto();
 	

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
	var mySwiper = new Swiper('.swiper-container', {
	  // Optional parameters
	  direction: 'vertical',
	  loop: true,

	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
	  },

	  // And if we need scrollbar
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
		goto("#intro");
	});
	$("#3").click(function(){
		goto("#view");
	});
	$("#4").click(function(){
		goto("#movie");
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

function showTitle() {
	if ($(window).scrollTop() >= 1079) {
		var easeInQuart = $(this).attr("data-easeInQuart");
		$(".info>div:nth-child(2)>span").each(function(i) {		    
			$(this).stop().animate({				
				height: '60px'
			}, 100 * (i + 0.1),easeInQuart);
		});
		setTimeout(function() {
			$(".info>div:nth-child(2)>span>p").each(function(i) {		
				$(this).stop().animate({	
					opacity: '1',
					top: '0'
				}, 100 * (i + 0.1),easeInQuart);					
			});	
		},800); clearTimeout();	
	};
};
