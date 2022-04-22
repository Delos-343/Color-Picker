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

function changeBG()  {

	var images = [
		"url('https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')",
		"url('https://images.unsplash.com/photo-1553915632-175f60dd8e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
		"url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
		"url('https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
		"url('https://images.unsplash.com/photo-1553135422-400ee5852b27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80')",
		"url('https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
	];

	
		if(document.getElementById("tema-1")) {
			document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')";
		}
		
		else if(document.getElementById("tema-2")) {
			document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1553915632-175f60dd8e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
		}
		
		else if(document.getElementById("tema-3")) {
			document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
		}
		
		else if(document.getElementById("tema-4")) {
			document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')";
		}
		
		else if(document.getElementById("tema-5")) {
			document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1553135422-400ee5852b27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522&q=80')";
		}
	
		else if(document.getElementById("tema-6")) {
			document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
		}

}

