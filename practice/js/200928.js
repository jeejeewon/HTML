var playOnce = 0;
$(function() {
	// $.noConflict();

	$("#s1").css({backgroundColor: "rgb(26, 26, 26)", color: "rgb(246, 238, 227)"}); //#1a1a1a
	$(".firstWord>span").css({color: 'rgb(246, 238, 227)'});
	$("#s2").css({backgroundColor: "rgb(246, 238, 227)", color: "rgb(26, 26, 26)"}); //#f6eee3
	$(".secondWord>span").css({color: 'rgb(26, 26, 26)'});
	$("#s3").css({backgroundColor: "rgb(246, 238, 227)"});
	$("#s4").css({backgroundColor: "rgb(26, 26, 26)"});

	showS1();

	$(".next, .prev, .up, .down").hover(
		function(e) {
			// console.log(e.fromElement.style.backgroundColor);
			// console.log($(this).parent()[0].style.backgroundColor);
			$(this).parent().css({
				backgroundColor: toggleColor($(this).parent()[0].style.backgroundColor)
			});
			$(this).parent().find("span").css({
				color: toggleColor($(this).parent().find("span").css("color"))
			});
			$(this).parent().addClass("over");
		}, function(e) {
			$(this).parent().css({
				backgroundColor: toggleColor($(this).parent()[0].style.backgroundColor)
			});
			$(this).parent().find("span").css({
				color: toggleColor($(this).parent().find("span").css("color"))
			});
			$(this).parent().removeClass("over");
		}
	);

	$(".next").click(function(e) {
		switch($(this).parent()[0].id) {
			case 's1':
				goto("#s2", showS2, 0);
				break;
			case 's3':
				goto("#s4", showS4, 0);
				break;
		}
	});

	$(".prev").click(function(e) {
		switch($(this).parent()[0].id) {
			case 's2':
				goto("#s1", showS1, 0);
				break;
			case 's4':
				goto("#s3", showS3, 0);
				break;
		}
	});

	$(".down").click(function(e) {
		switch($(this).parent()[0].id) {
			case 's1':
				goto("#s3", showS3, 1);
				break;
			case 's2':
				goto("#s4", showS4, 1);
				break;
		}
	});

	$(".up").click(function(e) {
		switch($(this).parent()[0].id) {
			case 's3':
				goto("#s1", showS1, 1);
				break;
			case 's4':
				goto("#s2", showS2, 1);
				break;
		}
	});
});

function toggleColor(color) {
	if(color == "rgb(26, 26, 26)") {
		return "rgb(246, 238, 227)";
	} else {
		return "rgb(26, 26, 26)";
	}
}

function goto(target, func, hv) {
	if(hv) {
		var scroll = {scrollTop: $(target).offset().top}
	} else {
		var scroll = {scrollLeft: $(target).offset().left}
	}
	$("html, body").animate(scroll, {
		duration: 700, 
		easing: 'easeOutBounce',
	// 	complete: func 
	// });
	}).promise().then(function() {
		backAll();
		func();
	});
}

function showS1() {
	$(".firstWord>span").css({color: 'rgb(246, 238, 227)'});
	$(".firstWord")
	.addClass("under")
	.delay(400)
	.promise() //다 끝난 뒤에 실행
	.then(function() {
		$(this).children().each(function(i) {
			$(this).stop().animate({
				top: '0px',
				opacity: '1'
			}, 400 * (i + 0.5));
		});
		$(".firstWord2").animate({
			top: '50%',
			opacity: '1'
		}, 2000);
	});
}

function showS2() {
	$(".secondWord")
	.addClass("under")
	.delay(400)
	.promise()
	.then(function() {
		$(this).children().each(function(i) {
			$(this).stop().animate({
				top: '0px',
				opacity: '1'
			}, 400 * (i + 0.5));
		});
		$(".secondWord2").animate({
			top: '50%',
			opacity: '1'
		}, 2000);
	});
}

function showS3() {
	$(".scene-wrap").animate({
		left: '0%',
	}, {
		duration: 1000, 
		easing: 'easeOutBounce',
	}).promise().then(function() {
		$(this).find("img").each(function(i) {
			$(this).animate({
				top: '0%',
				opacity: '1'
			}, 1000 * (i + 0.5));
		}).promise().then(function() {
			$(".thirdWord2").animate({
				top: '50%',
				opacity: '1'
			}, 2000);
		});
	});
}

function showS4() {
	$('.title').css({
		transform: 'translate(-50%, -50%) scale(12) rotate(360deg)',
		opacity: '1'
	});
}

function backAll() {
	$(".firstWord").removeClass("under");
	$(".firstWord").children().stop().css({
		top: '6vw',
		opacity: '0'
	});
	$(".firstWord2").css({
		top: '55%',
		opacity: '0'
	});

	$(".secondWord").removeClass("under");
	$(".secondWord").children().stop().css({
		top: '6vw',
		opacity: '0'
	});
	$(".secondWord2").css({
		top: '55%',
		opacity: '0'
	});
	$(".scene-wrap").css({
		left: '-100%'
	});
	$(".scene-wrap>div>img").css({
		top: '50%',
		opacity: '0'
	});
	$(".thirdWord2").css({
		top: '55%',
		opacity: '0'
	});
	$('.title').css({
		transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
		opacity: '0'
	})
}