
$(function(e) {
	// var oldjq = $.noConflict();
	var addDiv = setInterval(function() {
		var wrap = document.getElementById("wrap");
		var div = document.createElement("div");
		div.innerHTML = "<div><div></div></div>";
		wrap.appendChild(div);		
		// var firstDiv = $("<div></div>");
		// var secondDiv = $("<div></div>");		
		// var thirdDiv = $("<div></div>");			

		// wrap.appendChild(firstDiv);			
		// firstDiv.appendChild(secondDiv);			
		// secondDiv.appendChild(thirdDiv);

		(function () { 
			var firstDiv = $("#wrap>div");
			var secondDiv = $("#wrap>div>div");		
			var thirdDiv = $("#wrap>div>div>div");	

			firstDiv.css({
			"width" : getRandom() + "px",
			"height" : getRandom() + "px",
			"background-color" : "#" + randomColor(),
			"padding" : getRandom() + "px",			

			}); 
			secondDiv.css({
				"width" : getRandom() + "px",
				"height" : getRandom() + "px",
				"background-color" : "#" + randomColor(),
				"padding" : getRandom() + "px"			

			}); 			
			thirdDiv.css({
				"width" : getRandom() + "px",
				"height" : getRandom() + "px",
				"background-color" : "#" + randomColor(),
				"padding" : getRandom() + "px"
			}); 	
		})(this);
	},2000); 	
	
});

function getRandom(min, max) {
  min = Math.ceil(min) || 50; 
  max = Math.floor(max) || 100; 
  return Math.floor(Math.random() * (max - min)) + min; 
};

function randomColor() {
	return Math.round(Math.random() * 0xffffff).toString(16);
};

