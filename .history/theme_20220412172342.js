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

var list = document.getElementsByClassName("listItem");

function setLight() {
    document.getElementById("contentBox").style.backgroundColor = "#dcdcdc";
    document.getElementById("contentBox").style.color = "#222";

    list.style.color = "black";
}

function setBlue() {
    document.getElementById("contentBox").style.backgroundColor = "#87ceeb";
    document.getElementById("contentBox").style.color = "#222";

    list.style.color = "white";
}

function setOrange() {
    document.getElementById("contentBox").style.backgroundColor = "#ffa500";
    document.getElementById("contentBox").style.color = "#dcdcdc";

    list.style.color = "white";
}

function setDark() {
    document.getElementById("contentBox").style.backgroundColor = "#18191a";
    document.getElementById("contentBox").style.color = "#f1f1f1";

    list.style.color = "white";
}

function setRed() {
    document.getElementById("contentBox").style.backgroundColor = "#be0029";
    document.getElementById("contentBox").style.color = "#f1f1f1";

    list.style.color = "white";
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

