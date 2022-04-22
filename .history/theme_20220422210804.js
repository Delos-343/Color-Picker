$("").click( function(event){

	event.preventDefault();

	if ( $(this).hasClass("") ) {

	    $("").stop().animate({left:""}, 500);
	} else {

	    $("").stop().animate({left:""}, 500);
	}

	$(this).toggleClass("");

	return false;
});


document.getElementById("tema-1").onclick = setThemeOne();
document.getElementById("tema-2").onclick = setThemeTwo();
document.getElementById("tema-3").onclick = setThemeThree();
document.getElementById("tema-4").onclick = setThemeFour();
document.getElementById("tema-5").onclick = setThemeFive();
document.getElementById("tema-6").onclick = setThemeSix();

	
		function setThemeOne() {

			document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)";
		}
		
		function setThemeTwo() {
			document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1553915632-175f60dd8e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)";
		}
		
		function setThemeThree() {
			document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)";
		}
		
		function setThemeFour() {
			document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)";
		}
		
		function setThemeFive() {
			document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1553135422-400ee5852b27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80)";
		}
	
		function setThemeSix() {
			document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)";
		}

