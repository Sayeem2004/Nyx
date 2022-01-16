function start_home() {
    // Setting Up Background
    document.getElementById("body").style["background-image"] = "url(../img/home.jpg)";

    // Setting Up Variables
    var speed = 50;
    var delay = 25*speed;
    var header = document.getElementById("header");

    // First Message
    var text1 = "Welcome To Nyx!";
    setTimeout(function(){typeEffect(header, speed, text1, "#C3B1E1");}, delay);
    delay += text1.length * speed + 25 * speed;

    // Third Message
    var text3 = "I Hope You Enjoy It!";
    setTimeout(function(){typeEffect(header, speed, text3, "#C3B1E1");}, delay);
    delay += text3.length * speed + 25 * speed;

    // Fourth Message
    var text4 = "Try To Find All The Endings :)";
    setTimeout(function(){typeEffect(header, speed, text4, "#C3B1E1");}, delay);
    delay += text4.length * speed + 25 * speed;

    // Fifth Message
    var text5 = "Please Click The Button Below To Get Started.";
    setTimeout(function(){typeEffect(header, speed, text5, "#C3B1E1");}, delay);
    delay += text5.length * speed + 25 * speed;

    // Fading In Button
    var button = document.getElementById("button");
    setTimeout(function(){fadeIn(button);}, delay);
}

function end_home() {
    // Moving Onto Next Page
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/scene1.html?";
    url += "initial_health=" + encodeURIComponent(100) + "&";
    url += "initial_hunger=" + encodeURIComponent(100) + "&";
    url += "initial_thirst=" + encodeURIComponent(100) + "&";
    url += "initial_energy=" + encodeURIComponent(100) + "&";
    url += "initial_time=" + encodeURIComponent(0);
    document.location.href = url;
}
