$(function() {

	$("#to-top").click(function(){
		goto("#top");
		console.log(goto())
	});
	$("#1").click(function(){
		goto("#main");
	});
	$("#2").click(function(){
		goto("#map");
	});
	$("#3").click(function(){
		goto("#view-1");
	});
	$("#4").click(function(){
		goto("#view-2");
	});
	$("#5").click(function(){
		goto("#view-3");
	});

	$("#ticket").click(function(){
		$(this).animate({
			left: '50%'				
		},1000)	
	});
	$("#wrap").click(function(){
		$("#ticket").animate({
			left: '-300px'				
		},1000)	
	});





});

function goto(target) {
	//position() - 부모 기준의 위치값을 반환
	//$(선택자).position().top / $(선택자).position().left
	//offset() - 브라우저 기준의 위치값을 반환
	//$(선택자).offset().top / $(선택자).offset().left

	$("html, body, #wrap").animate({
			scrollTop: $(target).offset().top
		},1000);

}