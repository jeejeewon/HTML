window.onload = function() {
	var wrap = document.getElementById("wrap");
	var display =document.getElementById("display")

	var timer = [];
	var limit = 6;



	randomNum("");

	function randomNum () {	
		for(var i = 0; i < 6; i++) {	
			timer[i] =	setInterval(function() {		
					
				var random = Math.floor(Math.random() * 45) + 1;
				
				display.innerText = random;

				if(timer[i] == limit) {
					clearTimeout(timer[i])
				} console.log(random);
					
			}, 1000);
			 
		}
	}



}

