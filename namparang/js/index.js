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


/*swiper*/
	var swiper1 = new Swiper('#view-1-swiper', {
	 	allowTouchMove: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 300,				
		navigation: {
		nextEl: '#view-1-swiper>.swiper-button-next',
		prevEl: '#view-1-swiper>.swiper-button-prev',
		}
    });
    var swiper2 = new Swiper('#view-2-swiper', {
	 	allowTouchMove: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 300,				
		navigation: {
		nextEl: '#view-2-swiper>.swiper-button-next',
		prevEl: '#view-2-swiper>.swiper-button-prev',
		}
    });
    var swiper3 = new Swiper('#view-3-swiper', {
	 	allowTouchMove: true,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 300,				
		navigation: {
		nextEl: '#view-3-swiper>.swiper-button-next',
		prevEl: '#view-3-swiper>.swiper-button-prev',
		}
    });   


});

function goto(target) {
	$("html, body, #wrap").animate({
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
		goto("#main");
	});
	$("#2").click(function(){
		goto("#intro");
	});
	$("#3").click(function(){
		goto("#view-1");
	});
	$("#4").click(function(){
		goto("#view-2");
	});
	$("#5").click(function(){
		goto("#view-3");
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
		$("#info>div:nth-child(1)>span").each(function(i) {		    
			$(this).stop().animate({				
				height: '60px'
			}, 100 * (i + 0.1),easeInQuart);
		});
		setTimeout(function() {
			$("#info>div:nth-child(1)>span>p").each(function(i) {		
				$(this).stop().animate({	
					opacity: '1',
					top: '0'
				}, 100 * (i + 0.1),easeInQuart);					
			});	
		},800); clearTimeout();	
	};
};
