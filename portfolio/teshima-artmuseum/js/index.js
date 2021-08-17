$(function() {
  
  sideNav();
  setTimeout(function() {
    showTitle();
  },1400);

  $("#side-menu>li").click(function(){   
    $("#side-nav").removeClass("active");
    $("#btn-menu").removeClass("active");
  }); 
  $("#to-top").click(function(){  
      goto("#top");

  });
  hoverBox();

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
  var mySwiper = new Swiper('.swiper-container', {    
    direction: 'horizontal',
    loop: true, 
    parallax: true, 
    allowTouchMove: false,  
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: { 
      slideChangeTransitionEnd: function(){
         // showTitle();
      }
    }
  })

}); //window 끝

function showTitle() {
  $(".side-bottom-area>span").each(function(i) {        
      $(this).animate({        
        height: '68px'
      }, 100 * (i + 0.1),'easeInQuart');
    });   
    setTimeout(function() {
      $(".side-bottom-area>span>h1").each(function(i) {    
        $(this).animate({            
          opacity: '1',
          top: '0'
        }, 100 * (i + 0.1),'easeOutElastic');             
      });       
    },600); clearTimeout();   
}
 
function goto(target) {
  $("html, body, #wrap,#side, #main").animate({
    scrollTop: $(target).offset().top
  },1000);
};

function sideNav() { 
  var nav = document.getElementById("nav");
  var btnBar = document.getElementById("btn-menu");
  var sideNav = document.getElementById("side-nav");
  nav.onclick = function() {
    sideNav.classList.toggle("active");
    btnBar.classList.toggle("active");
  };
}

function hoverBox() {

  var timer = [];

  $(".artist-img").each(function(i) {
    timer[i] = null;
    $(this).hover(function() {
      (function(el) {
        timer[i] = setTimeout(function() {
          el.css({
              boxShadow: '0px 0px 300px rgba(0,0,0,0.6) inset'
          });
          el.find(".artist-info").stop().animate({
            right: '0',
            bottom: '0'
            },300, 'easeOutSine');          
        }, 300);          
      })($(this));
    }, function() { 
    $(".artist-img").css({
      boxShadow: '0px 0px 300px rgba(0,0,0,0) inset'
    });
    $(".artist-info").stop().animate({  
      right: '-75px',
       bottom: '-50px'         
    }, 300,'easeOutSine');  
    clearTimeout(timer[i]);
    });
  });

  $(".architect-img").each(function(i) {
    timer[i] = null;
    $(this).hover(function() {
      (function(el) {
        timer[i] = setTimeout(function() {
          el.css({
              boxShadow: '0px 0px 300px rgba(0,0,0,0.6) inset'
          });
          el.find(".architect-info").stop().animate({
            right: '0',
            bottom: '0'
            },300, 'easeOutSine');          
        }, 300);          
      })($(this));
    }, function() { 
    $(".architect-img").css({
      boxShadow: '0px 0px 300px rgba(0,0,0,0) inset'
    });
    $(".architect-info").stop().animate({  
      right: '-75px',
       bottom: '-50px'         
    }, 300,'easeOutSine');  
    clearTimeout(timer[i]);
    });
  });
  
};