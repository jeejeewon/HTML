$(function () {

	// $("li").click(function(){
	// 	if(this.innerText == "#1") {
	// 		$(this).addClass("active");			
	// 		$("li:nth-child(2)").removeClass("active");
	// 		$("li:nth-child(3)").removeClass("active");
	// 		// $(this).css({
	// 		// 	"color" : "white"
	// 		// });
	// 		// $("li:nth-child(2)").css({
	// 		// 	"color" : "black"
	// 		// });
	// 		// $("li:nth-child(3)").css({
	// 		// 	"color" : "black"
	// 		// });
	// 		$("#s-1").fadeIn(1000);				
	// 	};
	// 	if(this.innerText == "#2") {
	// 		$("li:nth-child(1)").removeClass("active");
	// 		$(this).addClass("active");	
	// 		$("li:nth-child(3)").removeClass("active");			
	// 		// $(this).css({
	// 		// 	"color" : "white"
	// 		// });
	// 		// $("li:nth-child(1)").css({
	// 		// 	"color" : "black"
	// 		// });
	// 		// $("li:nth-child(3)").css({
	// 		// 	"color" : "black"
	// 		// });
	// 		$("#s-1").fadeOut(1000);
	// 		$("#s-2").fadeIn(1000);		
	// 	};					
	// 	if(this.innerText == "#3") {				
	// 		$("li:nth-child(1)").removeClass("active");
	// 		$("li:nth-child(2)").removeClass("active");
	// 		$(this).addClass("active");	
	// 		// $(this).css({
	// 		// 	"color" : "white"
	// 		// });
	// 		// $("li:nth-child(1)").css({
	// 		// 	"color" : "black"
	// 		// });
	// 		// $("li:nth-child(2)").css({
	// 		// 	"color" : "black"
	// 		// });
	// 		$("#s-1").fadeOut(1000);	
	// 		$("#s-2").fadeOut(1000);
	// 		$("#s-3").fadeIn(1000);				
	// 	};		
	// });


	//함수 생성
	console.log($("#menu>ul>li")); //배열
	$("#menu>ul>li").click(function(){
		//forEach(el, index) == each(index , el) 
		//선택자 전부를 한번 훑음
		$("#menu>ul>li").each(function(i, el){
		// console.log(el);
			$(el).removeClass("active"); //다 없애고
		});
		// console.log(this);
		$(this).addClass("active"); //해당하는 것에 추가
		hide();
		console.log(this.innerText); //li 구별
		show(this);
	});
});

function hide() {
	// $(".scene").fadeOut(500);
	$(".scene").each(function(i, el){
		$(el).fadeOut(500);
	});
};
function show(li) {
	switch(li.innerText) {
		case "#1" :
			$('#s-1').fadeIn(500);
			break;		
		case "#2" :
			$('#s-2').fadeIn(500);
			break;
		case "#3" :
			$('#s-3').fadeIn(500);
			break;
	};	
};

