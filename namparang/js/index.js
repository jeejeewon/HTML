$(function() {

	/*LeaderLine*/
		// var point1 = document.querySelector("#point-1");
		// var point2 = document.querySelector("#point-2");
		// var point3 = document.querySelector("#point-3");
		// new LeaderLine(point1,point2,{dash: {animation: true}});
		// new LeaderLine(point2,point3,{dash: {animation: true}});

	resize();	
	nav();

	window.onresize = function() {
		resize()		
	};


});

function goto(target) {
	$("html, body, #wrap").animate({
			scrollTop: $(target).offset().top
		},1000);

};
function resize() {
	var wrapDiv = document.querySelectorAll(".contents-wrap");	
	wrapDiv.forEach(function(el){		
		el.style.height = window.innerHeight + "px";	
	});
	
};
function nav() {
	$("#to-top").click(function(){
		goto("#top");
		console.log(goto())
	});
	$("#1").click(function(){
		goto("#main");
	});
	$("#2").click(function(){
		goto("#intro");
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

};