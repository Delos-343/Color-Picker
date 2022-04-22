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

document.getElementById("theme-light").onclick = setLight;
document.getElementById("theme-blue").onclick = setBlue;
document.getElementById("theme-orange").onclick = setOrange;
document.getElementById("theme-dark").onclick = setDark;
document.getElementById("theme-red").onclick = setRed;


function setLight() {
    document.body.style.backgroundColor = "#f1f1f1";
    document.getElementById("contentBox").style.backgroundColor = "#dcdcdc";
    document.getElementById("contentBox").style.color = "#222";

}

function setBlue() {
    document.body.style.backgroundColor = "#2980b9";
    document.getElementById("contentBox").style.backgroundColor = "#87ceeb";
    document.getElementById("contentBox").style.color = "#222";

}

function setOrange() {
    document.body.style.backgroundColor = "#cc5500";
    document.getElementById("contentBox").style.backgroundColor = "#ffa500";
    document.getElementById("contentBox").style.color = "#dcdcdc";

}

function setDark() {
    document.body.style.backgroundColor = "#0c0c0c";
    document.getElementById("contentBox").style.backgroundColor = "#18191a";
    document.getElementById("contentBox").style.color = "#f1f1f1";

}

function setRed() {
    document.body.style.backgroundColor = "#c0392b";
    document.getElementById("contentBox").style.backgroundColor = "#be0029";
    document.getElementById("contentBox").style.color = "#f1f1f1";

}

function changeBG()  {

	var images = [
		"url('https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')",
		"url('https://images.unsplash.com/photo-1553915632-175f60dd8e36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
		"url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
	];

	var random = Math.floor(Math.random() * 6) + 0;
	document.body.style.backgroundImage = images[random];
}

