$(function() {
	var j = $.noConflict();
	
	// .rating > input:checked ~ label { color: #FFD700;  }

	$(".rating").each(function(i, elem) {
		// console.log(elem);
		// console.log($(el).children("input"));
		var starName = "";
		$(elem).children("input").each(function(j, el) {
			switch(j) {
				case 0:
					starName = "start5-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 1:
					starName = "start4half-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 2:
					starName = "start4-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 3:
					starName = "start3half-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 4:
					starName = "start3-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 5:
					starName = "start2half-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 6:
					starName = "start2-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 7:
					starName = "start1half-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 8:
					starName = "start1-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
				case 9:
					starName = "starthalf-" + i;
					$(this).attr({"id":starName, "name":"rating" + i});
					$(this).next().attr("for", starName);
					break;
			}
		});
	});

	$(".rating>input").click(function(e) {
		$(this).siblings().css("color", "#ddd");
		$(this).nextAll().css("color", "#FFD700");
	});
});