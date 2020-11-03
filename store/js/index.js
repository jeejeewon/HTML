$(function() {	


	/*swiper*/
	var eventSwiper = new Swiper('#main-swiper', {
	  direction: 'horizontal',
	  loop: true,	  
	  pagination: {
	    el: '#main-swiper-pagination',
	  },	 
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

    mySwiper.on('init', function(e) { //처음 한번 실행	    
	    var img1 = document.getElementById("news-img-1");
	    img1.forEach(function(el, i) {
	      el.style.width = '40%';    
	    });
	});
	mySwiper.init(); //슬라이더 초기화

	mySwiper.on('slideChangeTransitionEnd', function(e) { 
		var img1 = document.getElementById("news-img-1");
		var img2 = document.getElementById("news-img-2");
		var img3 = document.getElementById("news-img-3");

		switch(this.activeIndex) {
		  case 2:      
		    img1.forEach(function(el, i) { 
		      el.style.width = '20%';          
		    });
		    img2.style.width = '40%';      
		    
		    img3.forEach(function(el, i) {
		      el.style.width = '20%';      
		    });		
		    break;
		  case 0:
		  case 3:		    
		     img1.forEach(function(el, i) {
		      el.style.width = '20%';         
		    });
		    img2.style.width = '20%';       
		  
		    img3.forEach(function(el, i) {
		      el.style.width = '40%';      
		    });
		    break;
		  case 1:
		  case 4:		 
		     img1.forEach(function(el, i) {
		      el.style.width = '40%';         
		    });
		    img2.style.width = '20%';       
		   
		    img3.forEach(function(el, i) {
		      el.style.width = '20%';      
		    });
		    break;
		}
	});




}); //window로드끝