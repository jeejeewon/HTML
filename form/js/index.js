$(function() {
	

	$("#name").focus();

	switch(chkDevice()) {		
		 case 'mobile':
			$("#form, #wrap").css({
				height: "100%"
			});
		
			 break;
		default:
			$("#form").css({
				height: "700px;"
			});
			$("#wrap").css({
				height: "85%"
			});
			break;
	};

	function chkDevice() {
		var type = navigator.userAgent;
		if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(type)) {
			return "mobile";
		}
		return "desktop";
	};


});