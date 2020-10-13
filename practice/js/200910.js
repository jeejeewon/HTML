window.onload = function() {
  var lySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', 
    loop: true,
    pagination: {
      el: ' .swiper-pagination',
    },  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }) 
  var burger = document.getElementById("burger");
  var swiper = document.getElementById("swiper");
  burger.onclick = function() {    
    burger.classList.toggle("onclick");  
    // swiper.classList.toggle("onclick");

    // setTimeout(function() {
    //   swiper.classList.toggle("onclick");
    // },500);    
  }
}
