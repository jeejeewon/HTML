<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<link rel="stylesheet" href="http://jeewon.dothome.co.kr/theme/basic/css/swiper-bundle.min.css">
<script type="text/javascript" src="http://jeewon.dothome.co.kr/theme/basic/js/swiper-bundle.min.js"></script>

<!-- 상단 시작 { -->
<div id="hd" class="clear-both">
    <nav class="menu_02 clear-both">
         <div class="menu_02_slide_left"></div>
        <div class="menu_02_slide_right">
            <div id="close_btn">
                <div class="close_line"></div>				
            </div>
			<div class="menu_02_list_wrap">
				<div class="menu_list_02">
					<p>LMS(학사정보)</p>	
					<ul>
						<li>학점은행제</li>	
						<li>한국·외국어교육</li>
						<li>대학원대학교</li>
					</ul>
				</div>
				<div class="menu_list_02">
					<p>LMS(이러닝)</p>	
					<ul>
						<li>이러닝</li>	
						<li>노동부 환급(이러닝)</li>
						<li>노동부 환급(우편)</li>
					</ul>
				</div>
				<div class="menu_list_02">
					<p>스마트홈페이지</p>	
					<ul>
						<li>반응형</li>	
						<li>스마트형</li>
						<li>모바일형</li>
						<li>PC형</li>
						<li>웹클리닉</li>
						<li>웹마케팅</li>
					</ul>
				</div>
				<div class="menu_list_02">
					<p>데이터솔루션</p>	
					<ul>
						<li>사업성과관리</li>
						<li>학생상담관리</li>
						<li>자산추적(특허)관리</li>
						<li>시설물관리(NFC)</li>
						<li>연구실안전관리</li> 
					</ul>
				</div>
				<div class="menu_list_02">
					<p>고객지원</p>	
					<ul>
						<li><span>정유니브 is</span></li>
						<li><span>노동부원격훈련자료</span></li>    
					</ul>
				</div>
			</div>
        </div>        
    </nav>   
    <header class="clear-both">
        <div id="logo"></div>
        <nav class="menu_01">
            <ul>
                <li>LMS(학사정보)</li>
                <li>LMS(이러닝)</li>
                <li>스마트홈페이지</li>
                <li>데이터솔루션</li>
                <li>고객지원</li>                
            </ul> 
			<div class="menu_list_01_wrap">
				<div class="menu_list_01">
					<ul>
						<li><span>학점은행제</span></li>
						<li><span>한국·외국어교육</span></li>
						<li><span>대학원대학교</span></li>
					</ul>
					<ul>
						<li><span>이러닝</span></li>
						<li><span>노동부 환급(이러닝)</span></li>
						<li><span>노동부 환급(우편)</span></li>
					</ul>
					<ul>
						<li><span>반응형</span></li>
						<li><span>스마트형</span></li>
						<li><span>모바일형</span></li>
						<li><span>PC형</span></li>
						<li><span>웹클리닉</span></li> 
						<li><span>웹마케팅</span></li>          
					</ul>
					<ul>
						<li><span>사업성과관리</span></li>
						<li><span>학생상담관리</span></li>
						<li><span>자산추적(특허)관리</span></li>
						<li><span>시설물관리(NFC)</span></li>
						<li><span>연구실안전관리</span></li>           
					</ul>
					<ul>
						<li><span>정유니브 is</span></li>
						<li><span>노동부원격훈련자료</span></li>          
					</ul>
				</div>          
			</div>
        </nav>       
        <ul id="btn">
            <li>로그인</li>
            <li>사후관리</li>            
        </ul>
        <div id="burger">
            <div id="burger_line_wrap">
                <div class="burger_line"></div>
                <div class="burger_line"></div>
                <div class="burger_line"></div>               
            </div>              
        </div>
    </header>    
    <div class="swiper-container">       
        <div class="swiper-wrapper">
            <div class="swiper-slide">
				<div class="slide_banner_01"></div>
            </div>
            <div class="swiper-slide">
				<div class="slide_banner_02"></div>
            </div>
            <div class="swiper-slide">
				<div class="slide_banner_03"></div>
            </div>
        </div> 
        <div class="swiper_button_effect_prev">
            <div class="my_swiper_button_prev"></div>
        </div>       
        <div class="swiper_button_effect_next">
             <div class="my_swiper_button_next"></div>
        </div>       
    </div>


    <script>
        $(window).scroll(function(e) {           
           // console.log($(window).scrollTop());  
		    if ($(window).scrollTop() >= 1) {
                $("header").addClass('active'); 
            } else {
                $("header").removeClass('active');
            };                                   
        });
		$("#burger").click(function(){
			$(this).css({
				transform: "rotate(180deg)"			
			});
			$("#close_btn").css({
				transform: "rotate(0deg)"			
			});
			$(".menu_02").css({
				zIndex: "100"				
			});
			$(".menu_02_slide_left").animate({
					bottom : "0"					
			},600);	
			$(".menu_02_slide_right").animate({
				top : "0"						
			},600);					
		});	
		$("#close_btn").click(function(){		
			$(this).css({
				transform: "rotate(180deg)"			
			});
			$("#burger").css({
				transform: "rotate(0deg)"			
			});
			$(".menu_02_slide_left").animate({
				bottom : "-100%"					
			},600);	
			$(".menu_02_slide_right").animate({
				top : "-100%"						
			},600);			

			setTimeout(function(){ 
				$(".menu_02").css({
					zIndex: "0"
				});
			},600);
		});	

        /*swiper*/
        var mySwiper = new Swiper('.swiper-container', {
          
          direction: 'horizontal',
          loop: true,
          navigation: {
            nextEl: '.my_swiper_button_next',
            prevEl: '.my_swiper_button_prev',
          },
          // autoplay: {
          //   delay: 3000,
          // },
          on: {
              slideChangeTransitionEnd: function(){
                  console.log(this.activeIndex);
                  if(this.activeIndex == 0){

                  };

              }

          }
        });	        
      
    </script>    
 
</div>
<!-- } 상단 끝 -->


<hr>

<!-- 콘텐츠 시작 { -->
<div id="wrapper">
    <div id="container_wr">
   
    <div id="container">
        <?php if (!defined("_INDEX_")) { ?><h2 id="container_title"><span title="<?php echo get_text($g5['title']); ?>"><?php echo get_head_title($g5['title']); ?></span></h2><?php } ?>

