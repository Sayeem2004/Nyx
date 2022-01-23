function start_death(scene) {
    // Getting Current Values
    var health = document.getElementById("initial_health").value;
    var hunger = document.getElementById("initial_hunger").value;
    var thirst = document.getElementById("initial_thirst").value;
    var energy = document.getElementById("initial_energy").value;
    var initial_time = document.getElementById("initial_time").value;
    var current_time = document.getElementById("current_time").value;
    var help = document.getElementById("help");
    if (help != null) help = help.value;

    // Updating URL
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/death.html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(initial_time) + "&";
    url += "current_time=" + encodeURIComponent(current_time) + "&";
    url += "scene=" + encodeURIComponent(scene);
    if (help != null) url += "&help=" + encodeURIComponent(help);
    document.location.href = url;
}

function continue_death() {
    // Parsing Previous Values
    var url = document.location.href, params = (url.split('?').length <= 1 ? [] : url.split('?')[1].split('&'));
    for (var i = 0; i < params.length; i++) {
         var tmp = params[i].split('=');
         document.getElementById(tmp[0]).value = tmp[1];
    }

    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../img/death.jpg)";

    // Declaring Variables
    var speed = 50;
    var delay = 25*speed;

    // Giving Death Response
    var initial_time = document.getElementById("initial_time");
    var current_time = document.getElementById("current_time");
    initial_time.innerHTML = "You Survived For"
    setTimeout(function(){fadeIn(initial_time);}, delay);
    delay += speed;
    current_time.innerHTML = parse_time(parseInt(current_time.value));
    setTimeout(function(){fadeIn(current_time);}, delay);
    delay += speed;

    // Adding Game Options
    var options = document.getElementById("options");
    var rescene = document.getElementById("rescene");
    var restart = document.getElementById("restart");
    setTimeout(function(){fadeIn(options);}, delay);
    delay += speed;
    rescene.style["display"] = "";
    rescene.style["width"] = "350px";
    rescene.style["height"] = "50px";
    rescene.style["font-size"] = "20px";
    restart.style["display"] = "";
    restart.style["width"] = "350px";
    restart.style["height"] = "50px";
    restart.style["font-size"] = "20px";
    setTimeout(function(){fadeIn(rescene);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(restart);}, delay);
    delay += speed;
}
