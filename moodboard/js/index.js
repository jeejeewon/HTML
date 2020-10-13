window.onload = function() {   
   $("#contents-1").delay(250).fadeIn(1000);
   $("#contents-2").delay(250).fadeIn(1000);
   $(".title").delay(500).slideDown(1000);
   $(".main-text").delay(1500).slideDown(1000); 
   $("#button-area").delay(2000).fadeIn(1000);

  var iSpeed = 1;  
  var mySwiper = new Swiper('.swiper-container', {
    watchSlidesProgress: true,  
    direction: 'horizontal', //vertical horizontal
    allowTouchMove: false,
    speed: 3000,
    parallax: true, 
    spaceBetween: 30,
    effect: 'slide',    
    on: { 
      progress: function() {
        var swiper = this; 
        swiper.slides.forEach(function(el, i){          
          var innerSlider = swiper.width * iSpeed * el.progress;          
          el.querySelector('.slide-inner').style.transform = 'translate( ' + innerSlider + 'px,0)';
        });
      },
      setTransition: function(el, speed) { 
        var swiper = this;                
        for (var i = 0; i < swiper.slides.length; i++) {      
          swiper.slides[i].querySelector('.slide-inner').style.transition = speed + 'ms';        
        };
      },
      touchStart: function(el, e) { 
        var swiper = this;
        swiper.slides.forEach(function(el, i) {
          el.style.transition = "";
        });
      },
    }, 
  });   
  var next = document.querySelector("#next");
  next.onclick = function() {
    mySwiper.slideNext(1500);
  };
  var prev = document.querySelector("#prev");
  prev.onclick = function() {
    mySwiper.slidePrev(1500);
  };

  $("button").click(function() {
    if($(this).text() == "next") {
      $("#img-wrap-1>#left-img>div").addClass("onclass");
      $("#img-wrap-1>#right-img>div").addClass("onclass"); 
      $("#img-wrap-2>#left-img>div").removeClass("onclass");
      $("#img-wrap-2>#right-img>div").removeClass("onclass"); 
      $("#prev").addClass("onclass");           
      $("#next").addClass("onclass");    
    };
    if($(this).text() == "prev") {
      $("#img-wrap-2>#left-img>div").addClass("onclass");
      $("#img-wrap-2>#right-img>div").addClass("onclass");
      $("#img-wrap-1>#left-img>div").removeClass("onclass");
      $("#img-wrap-1>#right-img>div").removeClass("onclass");  
      $("#prev").removeClass("onclass");           
      $("#next").removeClass("onclass");          
    };
  });

};     
