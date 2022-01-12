var opacity = 0;
var intervalID = 0;

function fadeOut(img) {
    intervalID = setInterval(function(){hide(img);}, 20);
}

function fadeIn(img) {
	intervalID = setInterval(function(){show(img);}, 20);
}

function show(img) {
	opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
	if (opacity < 1) {
	    opacity = opacity+0.05;
		img.style.opacity=opacity;
        console.log(opacity);
	} else {
		clearInterval(intervalID);
	}
}

function hide(img) {
	opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
	if (opacity > 0) {
		opacity=opacity-0.05;
		img.style.opacity=opacity;
		console.log(opacity);
	} else {
		clearInterval(intervalID);
	}
}
