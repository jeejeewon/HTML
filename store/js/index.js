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
	  direction: 'horizontal',
	  loop: true,	  
	  // pagination: {
	  //   el: '#main-swiper-pagination',
	  // },	 
	   navigation: {
	    nextEl: '#news-swiper-next',
	    prevEl: '#news-swiper-prev',
	  },
	})


}); //window로드끝