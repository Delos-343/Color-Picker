document.getElementById("theme-light").onclick = setLight;
document.getElementById("theme-blue").onclick = setBlue;
document.getElementById("theme-orange").onclick = setOrange;
document.getElementById("theme-dark").onclick = setDark;
document.getElementById("theme-red").onclick = setRed;


function setLight() {
    document.getElementById("contentBox").style.backgroundColor = "#dcdcdc";
    document.getElementById("contentBox").style.color = "#222";

}

function setBlue() {
    document.getElementById("contentBox").style.backgroundColor = "#87ceeb";
    document.getElementById("contentBox").style.color = "#222";

}

function setOrange() {
    document.getElementById("contentBox").style.backgroundColor = "#ffa500";
    document.getElementById("contentBox").style.color = "#dcdcdc";

}

function setDark() {
    document.getElementById("contentBox").style.backgroundColor = "#18191a";
    document.getElementById("contentBox").style.color = "#f1f1f1";

}

function setRed() {
    document.getElementById("contentBox").style.backgroundColor = "#be0029";
    document.getElementById("contentBox").style.color = "#f1f1f1";

}
