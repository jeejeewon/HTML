$(function() {

	// var point1 = document.querySelector("#point-1");
	// var point2 = document.querySelector("#point-2");
	// var point3 = document.querySelector("#point-3");
	// new LeaderLine(point1,point2,{dash: {animation: true}});
	// new LeaderLine(point2,point3,{dash: {animation: true}});






/*nav*/
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
		$("#ticket-wrap").animate({
			left: '50%'				
		},1000)	
		$("#ticket-close").fadeIn(1100);
	});
	$("#ticket-close").click(function(){
		$("#ticket-wrap").animate({
			left: '-300px'				
		},1000)	
		$("#ticket-close").fadeOut(1100);
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