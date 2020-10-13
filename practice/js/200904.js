window.onload = function() {
	var display = document.getElementById("display");
	clock();
}

function clock() {
	setInterval(function(){
		var date = new Date();
		var y = date.getFullYear();
		var m = date.getMonth();
	    var h = date.getHours(); 
	    var mi = date.getMinutes(); 
	    var s = date.getSeconds(); 
	    var session = "AM";
	 
	    var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]


	    if(h == 0) {
	        h = 12;
	    } else if (h > 12) {
	        h = h - 12;
	        session = "PM";
		}

		h = h < 10 ? "0" + h : h;
		mi = mi < 10 ? "0" + mi : mi;
		s = s < 10 ? "0" + s : s;  
	    
	    var time = y + "." +(m + 1) + "." + week[date.getDay()] + "</br>" + h + ":" + mi + ":" + s + " " + session;        
	    console.log(time);
	    display.innerHTML = time;

	},1000)
	
} 
