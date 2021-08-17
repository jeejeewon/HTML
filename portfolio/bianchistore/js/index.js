$(function() {

	$("#to-top").click(function(){
		goto("#main");	
	});	
	$("#nav-bar-element-wrap>ul>li:nth-child(1)").click(function(){
		goto("#main");		
	});

	$(window).scroll(function(e) {           
        // console.log($(window).scrollTop());   
        showHeader();                   
    });
    bikeMenu();
    hoverProducts();
    sideNav();

	/*swiper*/
	var eventSwiper = new Swiper('#main-swiper', {
		direction: 'horizontal',
		loop: true,	
		parallax: true,   
		// autoplay: {
		// 	delay: 5000,
		// },
		pagination: {
			el: '#main-swiper-pagination',
			clickable: true
		}
	})
	var newsSwiper = new Swiper('#news-swiper', {
		loop: true,	  
		slidesPerView: 'auto',
		centeredSlides: true,
		// spaceBetween: 30,
		allowTouchMove: false,
		navigation: {
		nextEl: '#news-swiper-next',
		prevEl: '#news-swiper-prev',
	  }     
    });

	/*AOS*/
	AOS.init({ 
	  offset: 200, 
	  delay: 0,
	  duration: 600, 
	  easing: 'ease-in-out', 
	  once: true, 
	  mirror: false,
	});

}); //window로드끝

function goto(target) {
	$("html, body").animate({
		scrollTop: $(target).offset().top
	},1000);
};
function bikeMenu() {
	var timer = [];
	$("#bike-wrap").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {
					$("#bike-wrap>ul").css({
						opacity: '1',
					});		
					$("#bike-wrap>ul").stop().animate({
						height: '185px',
					},300,'easeInOutBack');								
				}, 100);					
			})($(this));
		}, function() {	
		$("#bike-wrap>ul").mouseleave(function(){
			$("this").stop().animate({
				height: '0',
			},300,'easeInOutBack');	
			$(this).css({
				opacity: '0'
			});	
		});							
			clearTimeout(timer[i]);
		});
	});	

	$("#mo-bike-wrap").click(function(e) {
		$("#mo-bike-wrap ul").slideToggle(500, function() {
		
		});
	});
};

function showHeader() {
	if ($(window).scrollTop() >= 115) {
		$("#nav-bar-wrap").css({
			position: 'fixed',	
			backgroundColor: '#fff',
			borderBottom: '1px solid #ddd'			
		});
		$("#nav-bar-element-wrap").css({
			borderTop: '0',
			borderBottom: '0'
		})
	} else {
		$("#nav-bar-wrap").css({
			position: 'relative', 
			backgroundColor: 'transparent',
			borderBottom: '0'
		});
			$("#nav-bar-element-wrap").css({
			borderTop: '1px solid #ddd',
			borderBottom: '1px solid #ddd'
		})
	};
};

function hoverProducts() {
	var timer = [];
	$(".products-box").each(function(i) {
		timer[i] = null;
		$(this).hover(function() {
			(function(el) {
				timer[i] = setTimeout(function() {			
					el.css({			
						transform: 'scale(1.1)',
						transition: '0.3s ease',
						zIndex:'2',
						top: '10px',
						boxShadow: '1px 1px 10px rgba(0,0,0,0.3)',
						height: '120%',
						backgroundColor: '#fff'	
					}).find(".products-icon-wrap").delay(100).animate({
						opacity: '1',
						paddingTop: '30px'
					},300,'easeInOutBack');							
				}, 300);					
			})($(this));
		}, function() {	
			$(this).find(".products-icon-wrap").animate({
				opacity: '0',
				paddingTop: '50px'
			},300,'easeInOutBack');	
			setTimeout(function() {
			$(".products-box").css({
					transition: '0.3s ease',
					transform: 'scale(1.0)',
					zIndex:'0',
					top: '0',
					boxShadow: '0 0 0 rgba(0,0,0,0)',	
					height: '100%',
					backgroundColor: '#f6f6f6'	
				});							
			},300);		
			clearTimeout(timer[i]);
		});
	});			

};
function sideNav() {	
	

	var burgerWrap = document.getElementById("burger-wrap");
	var burger = document.getElementById("burger");	
	var sideNav = document.getElementById("side-nav");
	burgerWrap.onclick = function() {
		sideNav.classList.toggle("active");
		burger.classList.toggle("onclick");

	};
}

/*loading*/
;(function(){
	let cnt = 0, 
		totalElem = 0,
		ovrl = null,
		prog = null;
		
	function id(v){ return document.getElementById(v);}
	function getBackgroundImage(elem) {
		if(elem.tagName == "IMG") {
			return elem;
		} else {
			let css = getComputedStyle(elem);
			let bg = css.getPropertyValue('background-image');
			if(bg != "none" && bg != "") {
				let img = new Image();
				img.src = bg.substring(5, bg.length - 2);
				return img;
			} else {
				return false;
			}
		}
	}

	function chkChildren(elem, imgs) {
		addImgs(elem, imgs);
		if(elem.children.length) {
			for(let i = 0; i < elem.children.length; i++) {
				chkChildren(elem.children[i], imgs);
			}
		}
	}

	function addImgs(elem, imgs) {
		let isBg = false;
		if(isBg = getBackgroundImage(elem))
			imgs.push(isBg);
	}

	function imgLoaded() {
		cnt++;
		let perc = ((100 / totalElem * cnt) << 0) + '%';
		prog.style.width = perc;		
		if(cnt === totalElem) return doneLoading();
	}

	function doneLoading(){
		ovrl.style.opacity = 0;
		setTimeout(function(){ 
			ovrl.style.display = "none";
		}, 1200);
	}

	function loading() {
		let body = document.body;
		let imgs = [];
		ovrl = id("overlay");
		prog = id("progress");		
		
		chkChildren(body, imgs);
		totalElem = imgs.length;

		for(let i = 0; i < totalElem; i++) {
			var img = new Image();
			img.onload = imgLoaded;
			img.error = imgLoaded;
			img.src = imgs[i].src;
		}
	}

	document.addEventListener('DOMContentLoaded', loading, false);

}());

