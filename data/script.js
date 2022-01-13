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
    var url = "https://sayeem2004.github.io/Nyx/pages/scene1.html?";
    url += "initial_health=" + encodeURIComponent(100) + "&";
    url += "initial_hunger=" + encodeURIComponent(100) + "&";
    url += "initial_thirst=" + encodeURIComponent(100) + "&";
    url += "initial_energy=" + encodeURIComponent(100) + "&";
    url += "initial_time=" + encodeURIComponent(12*60);
    document.location.href = url;
}

// Functions For Scene 1
function show_tags(list) {
    // Making Display Open
    for (var i = 0; i < list.length; i++) {
        document.getElementById(list[i]).style["display"] = "";
    }
}

function hide_tags(list) {
    // Making Display Closed
    for (var i = 0; i < list.length; i++) {
        document.getElementById(list[i]).style["display"] = "none";
    }
}

function start_scene1() {
    // Parsing Previous Values
    var url = document.location.href, params = (url.split('?').length <= 1 ? [] : url.split('?')[1].split('&'));
    for (var i = 0; i < params.length; i++) {
         var tmp = params[i].split('=');
         document.getElementById(tmp[0]).value = tmp[1];
    }

    // Setting Current Values
    document.getElementById("current_health").value = document.getElementById("initial_health").value;
    document.getElementById("current_hunger").value = document.getElementById("initial_hunger").value;
    document.getElementById("current_thirst").value = document.getElementById("initial_thirst").value;
    document.getElementById("current_energy").value = document.getElementById("initial_energy").value;
    document.getElementById("current_time").value = document.getElementById("initial_time").value;

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
    var text2 = "Boom! Your eyes shoot open, and you are blinded by the light. After a couple of moments of adjusting your eyes, you begin taking in your surroundings. You appear to be in a grassy plain with massive pieces of rubble nearby that you assume to be from your crash-landing. Crash-landing? Were you in a spaceship of some kind? Your memory seems to be foggy. You remember entering cryostasis but can't recall what happened, where you are, or your purpose here. Whatever. The most urgent thing is to survive. As you harden your resolve, you discover purple particles floating up from the ground and streaming towards somewhere in the distance. Maybe you should go to check them out?";
    setTimeout(function(){typeEffect(story, speed/16, text2, "black");}, delay);
    delay += text2.length * speed/16 + 25 * speed;

    // Fading In Button
    show_tags(["button"]);
    var button = document.getElementById("button");
    button.style["width"] = "250px";
    button.style["height"] = "100px";
    setTimeout(function(){fadeIn(button);}, delay);
}

function action_scene1() {
    // Removing Button And Story
    const hide_list = ["button", "story", "header"];
    hide_tags(hide_list);

    // Getting Variables
    var clock = document.getElementById("current_time");

    var options = document.getElementById("options");
    var restory = document.getElementById("restory");
    var rescene = document.getElementById("rescene");
    var restart = document.getElementById("restart");

    var status = document.getElementById("status");
    var progress = document.getElementById("progress");
    var current_health = document.getElementById("current_health");
    var health_label = document.getElementById("health_label");
    var current_hunger = document.getElementById("current_hunger");
    var hunger_label = document.getElementById("hunger_label");
    var current_thirst = document.getElementById("current_thirst");
    var thirst_label = document.getElementById("thirst_label");
    var current_energy = document.getElementById("current_energy");
    var energy_label = document.getElementById("energy_label");

    var moves = document.getElementById("moves");
    var follow = document.getElementById("follow");
    var food = document.getElementById("food");
    var water = document.getElementById("water");
    var sleep = document.getElementById("sleep");
    var panic = document.getElementById("panic");

    // Setting Them Open
    show_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "follow", "food", "water", "sleep", "panic"]);

    // Declaring Variables
    var speed = 10;
    var delay = 10*speed;

    // Adding Timer
    hide_tags(["initial_time"]);
    clock.innerHTML = parse_time(parseInt(clock.value));
    setTimeout(function(){fadeIn(clock);}, delay);
    delay += speed;

    // Adding Game Options
    options.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(options);}, delay);
    delay += speed;
    restory.style["width"] = "350px";
    restory.style["height"] = "50px";
    rescene.style["width"] = "350px";
    rescene.style["height"] = "50px";
    restart.style["width"] = "350px";
    restart.style["height"] = "50px";
    setTimeout(function(){fadeIn(restory);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(rescene);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(restart);}, delay);
    delay += speed;

    // Adding Player Status
    status.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(status);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(progress);}, delay);
    delay += speed;
    health_label.innerHTML = "Health: " + current_health.value + "%";
    current_health.style["width"] = current_health.value + "%";
    hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
    current_hunger.style["width"] = current_hunger.value + "%";
    thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";
    current_thirst.style["width"] = current_thirst.value + "%";
    energy_label.innerHTML = "Energy: " + current_energy.value + "%";
    current_energy.style["width"] = current_energy.value + "%";

    // Adding Player Actions
    moves.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(moves);}, delay);
    delay += speed;
    follow.style["width"] = "350px";
    food.style["width"] = "350px";
    water.style["width"] = "350px";
    sleep.style["width"] = "350px";
    panic.style["width"] = "350px";
    follow.style["height"] = "50px";
    food.style["height"] = "50px";
    water.style["height"] = "50px";
    sleep.style["height"] = "50px";
    panic.style["height"] = "50px";
    setTimeout(function(){fadeIn(follow);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(food);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(water);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(sleep);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(panic);}, delay);
    delay += speed;
}

function parse_time(num) {
    var days = Math.floor(num / 1440);
    var hours = Math.floor((num % 1440) / 60);
    var minutes = num % 60;
    return "Day " + days + " " + (hours < 10 ? "0"+hours : hours) + ":" + (minutes < 10 ? "0"+minutes : minutes);
}

function story_scene1() {
    // Bring Backing Story
    show_tags(["button", "story", "header"]);

    // Setting Them Open
    hide_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "follow", "food", "water", "sleep", "panic"]);
}

function reset_scene(scene) {
    // Getting Initial Values
    var health = document.getElementById("initial_health").value;
    var hunger = document.getElementById("initial_hunger").value;
    var thirst = document.getElementById("initial_thirst").value;
    var energy = document.getElementById("initial_energy").value;
    var time = document.getElementById("initial_time").value;

    // Updating URL
    var url = "https://sayeem2004.github.io/Nyx/pages/scene" + scene + ".html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(time);
    document.location.href = url;
}

function restart() {
    // Going Back To Home
    document.location.href = "https://sayeem2004.github.io/Nyx/pages/home.html"
}

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var ax = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function update(tag, dif, mn, mx) {
    tag.value = parseInt(tag.value) + dif;
    tag.value = Math.max(mn, parseInt(tag.value));
    tag.value = Math.min(mx, praseInt(tag.value));
}

function follow_update(msgs) {
    // Updating Time
    var time_add = getRandomInt(60, 121);
    var clock = document.getElementById("current_time");
    update(clock, time_add, 0, 1000000000);
    clock.innerHTML = parse_time(parseInt(clock.value));

    // Updating Health, Food, Thirst, Energy
    var health = document.getElementById("current_health");
    var hunger = document.getElementById("current_hunger");
    var thirst = document.getElementById("current_thirst");
    var energy = document.getElementById("current_energy");
    update(energy, getRandomInt(5, 11), 0, 100);
    current_energy.style["width"] = current_energy.value + "%";
    update(hunger, getRandomInt(5, 11), 0, 100);
    current_hunger.style["width"] = current_hunger.value + "%";
    update(thirst, getRandomInt(5, 16), 0, 100);
    current_thirst.style["width"] = current_thirst.value + "%";

    // Updating Warnings
    var response = document.getElementById("response");
    response.innerHTML = "";
    if (energy.value == 0) {
        update(health, -1*getRandomInt(3, 6), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        response.innerHTML += "You lost health from extreme tiredness. ";
    }
    if (hunger.value == 0) {
        update(health, -1*getRandomInt(3, 11), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        response.innerHTML += "You lost health from extreme hunger. "
    }
    if (thirst.value == 0) {
        update(health, -1*getRandomInt(3, 16), 0, 100);
        current_health.style["width"] = current_health.value + "%";
        response.innerHTML += "You lost health from extreme thirst. ";
    }
    if (health.value == 0) {
        start_death(1);
    }

    // Updating Response Count
    var follow_count = document.getElementById("follow_count");
    follow_count.value = parseInt(follow_count.value)+1;
    response.innerHTML += msgs[Math.min(parseInt(follow_count.value), msgs.length-1)]

    // Changing Scene If Necessary
    if (follow_count.value == msg.length+1) end_scene1();
}

function end_scene1() {
    // Getting Current Values
    var health = document.getElementById("current_health").value;
    var hunger = document.getElementById("current_hunger").value;
    var thirst = document.getElementById("current_thirst").value;
    var energy = document.getElementById("current_energy").value;
    var time = document.getElementById("current_time").value;

    // Updating URL
    var url = "https://sayeem2004.github.io/Nyx/pages/scene2.html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(time);
    document.location.href = url;
}

function start_death(scene) {
    // Getting Current Values
    var health = document.getElementById("current_health").value;
    var hunger = document.getElementById("current_hunger").value;
    var thirst = document.getElementById("current_thirst").value;
    var energy = document.getElementById("current_energy").value;
    var initial_time = document.getElementById("initial_time").value;
    var current_time = document.getElementById("current_time").value;

    // Updating URL
    var url = "https://sayeem2004.github.io/Nyx/pages/death.html?"
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(initial_time) + "&";
    url += "current_time=" + encodeURIComponent(current_time) + "&";
    url += "scene=" + encodeURIComponent(scene);
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
    document.getElementById("body").style["background-image"] = "url(../images/scene1.jpg)";

    // Declaring Variables
    var speed = 75;
    var delay = 25*speed;

    // Giving Death Response
    var initial_time = document.getElementById("initial_time");
    var current_time = document.getElementById("current_time");
    var easter_egg = document.getElementById("easter_egg");
    var image = document.getElementById("image");
    initial_time.innerHTML = "You Survived For"
    setTimeout(function(){fadeIn(initial_time);}, delay);
    delay += speed;
    current_time.innerHTML = clock.innerHTML = parse_time(parseInt(current_time.value));
    setTimeout(function(){fadeIn(current_time);}, delay);
    delay += speed;
    if (current_time < 720) {
        show(["easter_egg", "image"])
        easter_egg.innerHTML = "Congratulations, You Have Died In Under 12 Hours And Obtained An Easter Egg."
        setTimeout(function(){fadeIn(current_time);}, delay);
        delay += speed;
        setTimeout(function(){fadeIn(image);}, delay);
        delay += speed;
    }

    // Adding Game Options
    var options = document.getElementById("options");
    var rescene = document.getElementById("rescene");
    var restart = document.getElementById("restart");
    options.style["color"] = "#17D4FE";
    setTimeout(function(){fadeIn(options);}, delay);
    delay += speed;
    rescene.style["width"] = "350px";
    rescene.style["height"] = "50px";
    restart.style["width"] = "350px";
    restart.style["height"] = "50px";
    setTimeout(function(){fadeIn(rescene);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(restart);}, delay);
    delay += speed;
}
