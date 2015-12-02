var h3 = document.getElementsByTagName("h3");
var button = document.getElementsByTagName("button");

for (var i = 0; i < h3.length; i+=1) {
	h3[i].style.display="none";
}


button[0].addEventListener("click", showText5);
button[1].addEventListener("click", showText4);
button[2].addEventListener("click", showText3);
button[3].addEventListener("click", showText2);
button[4].addEventListener("click", showText1);



function showText5() {
	if (h3[0].style.display === "none") {
		h3[0].style.display = "";
	} else {
		h3[0].style.display = "none";
	}
}

function showText4() {
	if (h3[1].style.display === "none") {
		h3[1].style.display = "";
	} else {
		h3[1].style.display = "none";
	}
}

function showText3() {
	if (h3[2].style.display === "none") {
		h3[2].style.display = "";
	} else {
		h3[2].style.display = "none";
	}
}

function showText2() {
	if (h3[3].style.display === "none") {
		h3[3].style.display = "";
	} else {
		h3[3].style.display = "none";
	}
}

function showText1() {
	if (h3[4].style.display === "none") {
		h3[4].style.display = "";
	} else {
		h3[4].style.display = "none";
	}
}

$("button").click() {
	$("h3").fadeIn("slow", showText5)}
