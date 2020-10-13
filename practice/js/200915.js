$(function () {
	$("#section-1").click(function(){
		// $("#p-1").css({
		// 	"height": "100px"
		// });
		// $("#p-2").css({
		// 	"height": "0"
		// });
		// $("#p-3").css({
		// 	"height": "0"
		// });
		if($("#p-1").css("height") == "0px"){
			$("#p-1").css({"height" : "100px"});
		} else {
			$("#p-1").css({"height" : "0"});
		};
	});
	$("#section-2").click(function(){	
		// $("#p-1").css({
		// 	"height":"0"
		// });
		// $("#p-2").css({
		// 	"height": "100px"
		// });
		// $("#p-3").css({
		// 	"height": "0"
		// });
		if($("#p-2").css("height") == "0px"){
			$("#p-2").css({"height" : "100px"});
		} else {
			$("#p-2").css({"height" : "0"});
		};
	});
	$("#section-3").click(function(){	
		// $("#p-1").css({
		// 	"height":"0"
		// });
		// $("#p-2").css({
		// 	"height": "0"
		// });
		// $("#p-3").css({
		// 	"height": "100px"
		// });
		if($("#p-3").css("height") == "0px"){
			$("#p-3").css({"height" : "100px"});
		} else {
			$("#p-3").css({"height" : "0"});
		};
	});
});