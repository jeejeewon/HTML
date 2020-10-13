window.onload = function() {
	var burger = document.getElementById("burger");
	burger.onclick = function() {
		burger.classList.toggle("onclick");
		close.classList.remove("onclick");
	}
	var close = document.getElementById("close");
	close.onclick = function() {
		close.classList.toggle("onclick");
		burger.classList.remove("onclick");
	}
}