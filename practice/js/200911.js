window.onload = function() {
  var iSpeed = 1;  
  var mySwiper = new Swiper('.swiper-container', {
    watchSlidesProgress: true,  
    direction: 'vertical',
    loop: true,
    pagination: { //페이징
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: { //자동 재생
      delay: 1000,
    },
    speed: 3000,
    parallax: true, 
    effect: 'slide',  
    // grabCursor: true, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: { //마우스휠 적용
    invert: false,
    },   
    scrollbar: { //스크롤바
      el: '.swiper-scrollbar',
    },  
    on: { //이벤트
      progress: function() { //Swiper 진행률이 변경되면 이벤트가 시작
        // console.log(this.slides); //Dom7 배열과 유사한 슬라이드 HTML 요소 모음 (특정 슬라이드의 HTMLElement를 얻으려면 mySwiper.slides [1]를 사용)        
        var swiper = this; //this ==  현재 슬라이드
        swiper.slides.forEach(function(el, i){
          console.log(el); //this 안에 있는 요소들     
          console.log(el.progress); //wrapper 번역의 현재 진행률 (0에서 1) 
          //0일 때 현재페이지          
          var innerSlider = swiper.height * iSpeed * el.progress;
          //swiper.height는 편차를 주기 위한 기준값 (꼭 이 값이 아니어도 됨)
          console.log(innerSlider);
          el.querySelector('.slide-inner').style.transform = 'translate(0, ' + innerSlider + 'px)';
        });
      },
      setTransition: function(el, speed) { //!요소 자리 채워줘야 작동함
      //Swiper가 애니메이션을 시작할 때마다 이벤트가 시작 
      //현재 전환 기간 (ms)을 인수로 받음
        var swiper = this;     
        // swiper.slides.forEach(function(el, i){            
        //   el.querySelector('.slide-inner').style.transition = speed + 'ms';
        // });
        for (var i = 0; i < swiper.slides.length; i++) {         
          swiper.slides[i].querySelector('.slide-inner').style.transition = speed + 'ms';
          // console.log(i);            
        };
      },
      touchStart: function(el, e) { //사용자가 Swiper를 터치하면 이벤트가 시작 (touchstart 이벤트를 인수로 받음)
        var swiper = this;
        swiper.slides.forEach(function(el, i) {
          el.style.transition = "";
        });
      },
    }, 
  }); 
};     
