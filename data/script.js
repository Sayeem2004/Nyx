// Written By Me

// Functions For The Homepage
function start_home() {
    // Setting Up Background
    document.getElementById("body").style["background-image"] = "url(../images/home.jpg)";

    // Setting Up Variables
    var speed = 75;
    var delay = 25*speed;
    var header = document.getElementById("header");

    // First Message
    var text1 = "Welcome To Nyx!";
    setTimeout(function(){typeEffect(header, speed, text1, "#C3B1E1");}, delay);
    delay += text1.length * speed + 25 * speed;

    // Second Message
    var text2 = "This Is A Game I Created For My Science Fiction Final Project.";
    setTimeout(function(){typeEffect(header, speed, text2, "#C3B1E1");}, delay);
    delay += text2.length * speed + 25 * speed;

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
    url = "https://sayeem2004.github.io/Nyx/pages/scene1.html?";
    url += "initial_health=" + encodeURIComponent(100) + "&";
    url += "initial_hunger=" + encodeURIComponent(100) + "&";
    url += "initial_thirst=" + encodeURIComponent(100) + "&";
    url += "initial_energy=" + encodeURIComponent(100);
    document.location.href = url;
}

// Functions For Scene 1
function start_scene1() {
    // Parsing Previous Values
    var url = document.location.href, params = url.split('?')[1].split('&');
    for (var i = 0; i < params.length; i++) {
         var tmp = params[i].split('=');
         document.getElementById(tmp[0]).value = tmp[1];
    }

    // Setting Current Values
    document.getElementById("current_health").value = document.getElementById("initial_health").value;
    document.getElementById("current_hunger").value = document.getElementById("initial_hunger").value;
    document.getElementById("current_thirst").value = document.getElementById("initial_thirst").value;
    document.getElementById("current_energy").value = document.getElementById("initial_energy").value;

    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../images/scene1.jpg)";

    // Setting Up Variables
    var speed = 75;
    var delay = 25*speed;
    var header = document.getElementById("header");
    var story = document.getElementById("story");

    // First Message
    var text1 = "Scene 1";
    setTimeout(function(){typeEffect(header, speed, text1, "black");}, delay);
    delay += text1.length * speed + 25 * speed;
    setTimeout(function(){header.innerHTML = "";}, delay);

    // Story Board
    var text2 = "Boom! Your eyes shoot open, and you are blinded by the light. After a couple of moments of adjusting your eyes, you begin taking in your surroundings. There are massive pieces of rubble nearby that you assume to be from your crash-landing. Crash-landing? Were you in a spaceship of some kind? Your memory seems to be foggy. You remember entering cryostasis but can’t recall what happened, where you are, or your purpose here. Whatever. The most urgent thing is to survive. As you harden your resolve, you discover purple particles floating up from the ground and streaming towards somewhere in the distance. Maybe you should go to check them out?";
    setTimeout(function(){typeEffect(story, speed, text2, "black");}, delay);
    delay += text2.length * speed + 25 * speed;

    // Fading In Button
    var button = document.getElementById("button");
    button.style["width"] = "250px";
    button.style["height"] = "100px";
    setTimeout(function(){fadeIn(button);}, delay);
}
