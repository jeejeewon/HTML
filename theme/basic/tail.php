<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
    return;
}
?>
    </div>
 
</div>

</div>
<!-- } 콘텐츠 끝 -->

<hr>

<!-- 하단 시작 { -->
<div id="ft">
	<div class="ft_wrap">
		<div class="ft_info">
			<ul class="ft_policy">
				<li>사이버몰 이용약관</li>
				<li>사업자정보확인</li>
			</ul>	
			<ul class="ft_menu">
				<li>LMS(학사정보)</li>
				<li>LMS(이러닝)</li>
				<li>스마트홈페이지</li>
				<li>데이터솔루션</li>
				<li>고객지원</li>    
			</ul>		
		</div>
		<div class="company_info">
            <p class="text_contents"><strong>설립일</strong> 2001년 2월 1일&nbsp;&nbsp;<strong>대표이사</strong> 정문국<br/>
                <strong>사업자 등록번호</strong> 621-81-60314&nbsp;&nbsp;<strong>법인등록번호</strong> 180111-0497403&nbsp;&nbsp;<strong>통신판매업신고번호</strong> 제2011-부산남구-232호&nbsp;&nbsp;<strong>개인정보책임자</strong> 고형지<br/>
                <strong>서울지사</strong> 06221 서울시 강남구 테헤란로216, 12층 (역삼동, 신웅타워)&nbsp;&nbsp;<strong>부산본사</strong> 48508 부산시 남구 수영로312, 828호 (대연동,21센츄리시티빌딩)<br/>
                <strong>대표전화</strong> 1644.2728(전국)&nbsp;&nbsp;<strong>팩스</strong> 02.6455.2728&nbsp;&nbsp;<strong>이메일</strong> 16442728@junguniv.com</p>
		</div>
		<div class="ft_img_wrap">
			<ul class="coperation_logo">
				<li>
                    <img src="./theme/basic/img/tmp/coperation1.gif" alt="coperation1">
                </li>
				<li>
                    <img src="./theme/basic/img/tmp/coperation2.gif" alt="coperation2">
                </li>
				<li>
                    <img src="./theme/basic/img/tmp/coperation3.gif" alt="coperation3">
                </li>
				<li>
                    <img src="./theme/basic/img/tmp/coperation4.gif" alt="coperation4">
                </li>
				<li>
                    <img src="./theme/basic/img/tmp/coperation5.gif" alt="coperation5">
                </li>
                <li>
                    <img src="./theme/basic/img/tmp/coperation6.gif" alt="coperation6">
                </li>
                <li>
                    <img src="./theme/basic/img/tmp/coperation7.gif" alt="coperation7">
                </li>
			</ul>
			<ul class="sns_icon">
				<li>
                    <img src="./theme/basic/img/tmp/sns1.png" alt="sns1">
                </li>
				<li>
                    <img src="./theme/basic/img/tmp/sns2.png" alt="sns2">
                </li>
				<li>
                    <img src="./theme/basic/img/tmp/sns3.png" alt="sns3">
                </li>
			</ul>
		</div>
	</div>  
</div>

<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_THEME_PATH."/tail.sub.php");
?>