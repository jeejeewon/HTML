$(function() {	
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
};