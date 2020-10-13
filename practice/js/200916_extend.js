$(function() {
	$("#loader").fadeOut(500);
	$("#wrap").fadeIn(500);
	// console.log($("#menu>ul>li"));
	open();
	$("#menu>ul>li").click(function() {
		//forEach(el, index) == each(index, el)
		close();
		$("#menu>ul>li").each(function(index, el) {
			$(el).removeClass("active");
		});
		$(this).addClass("active");
		(function(tel) { //즉시 실행 함수
			setTimeout(function() {
				open();
				hide();
				show(tel);
			}, 2000);
		})(this);
		// (function () {
		// statements 
		// })() 즉시 실행 함수 기본형태
		//변수 충돌 방지
	});
});
function hide() {
	// $(".scene").fadeOut(500);
	$(".scene").each(function(index, el) {
		$(el).hide();
	});
}
function show(li) {
	console.log(li.innerText);
	switch(li.innerText) {
		case "#1":
			$('#s-1').show();
			break;
		case "#2":
			$('#s-2').show();
			break;
		case "#3":
			$('#s-3').show();
			break;
	}
}

function open() {
	// $("#c1").animate({
	// 	top : '100%'
	// }, 1000);
	// $("#c2").animate({
	// 	top : '-100%'
	// }, 1000);
	// $("#c3").animate({
	// 	top : '100%'
	// }, 1000);
	$("#c-1").animate({
		top : '100%'
	}, 500, function() {
		$("#c-2").animate({
			top : '-100%'
		}, 500, function() {
			$("#c-3").animate({
				top : '100%'
			}, 500);
		});
	});
}

function close() {
	// $("#c1").animate({
	// 	top : '0%'
	// }, 1000);
	// $("#c2").animate({
	// 	top : '0%'
	// }, 1000);
	// $("#c3").animate({
	// 	top : '0%'
	// }, 1000);

	$("#c-3").animate({
		top : '0%'
	}, 500, function() {
		$("#c-2").animate({
			top : '0%'
		}, 500, function() {
			$("#c-1").animate({
				top : '0%'
			}, 500);
		});
	});
}
