function start_scene4() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../img/scene4.jpg)";

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

    // Setting Up Variables
    var speed = 50;
    var delay = 25*speed;
    var header = document.getElementById("header");
    var story = document.getElementById("story");
    var second = document.getElementById("second");
    var help = document.getElementById("help");

    // First Message
    header.style["width"] = "250px";
    var text1 = "Scene 4";
    setTimeout(function(){typeEffect(header, speed, text1, "");}, delay);
    delay += text1.length * speed + 25 * speed;
    setTimeout(function(){header.innerHTML = "";}, delay);

    // Story Board
    var text2 = "After passing through the village, you discover a group of approximately fifty villagers preparing weapons and supplies. It looks like they were about to go on an expedition, but you wonder where? Suddenly, a horn blows, and the group sets off towards the stream of purple particles. They were probably trying to find the source of the particles like you were. You decide to join them, but remain a little bit behind them, so they don’t see you. They would be valuable whether it was for supplies, protection, or support.";
    setTimeout(function(){typeEffect(story, speed/16, text2, "");}, delay);
    delay += text2.length * speed/16 + 25 * speed;

    // Story Board Part 2
    var text3;
    if (help.value == "yes") text3 = "Before you go, you look back at the wolf that was following you, and it seems like it doesn’t want to abandon the village. You decide to give it one final thanks and then resume your journey.";
    else text3 = ""
    setTimeout(function(){typeEffect(second, speed/16, text3, "");}, delay);
    delay += text3.length * speed/16 + 25 * speed;

    // Fading In Button
    show_tags(["button"]);
    var button = document.getElementById("button");
    button.style["width"] = "250px";
    button.style["height"] = "100px";
    button.style["font-size"] = "20px";
    setTimeout(function(){fadeIn(button);}, delay);
}

function action_scene4() {
    // Removing Button And Story
    hide_list = ["button", "story", "header", "second"];
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

    var row1 = document.getElementById("row1");
    var row2 = document.getElementById("row2");
    var row3 = document.getElementById("row3");

    // Setting Them Open
    show_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "follow", "food", "water", "sleep", "panic"]);

    // Declaring Variables
    var speed = 50;
    var delay = 10*speed;

    // Adding Timer
    clock.style["width"] = "500px";
    hide_tags(["initial_time"]);
    clock.innerHTML = parse_time(parseInt(clock.value));
    setTimeout(function(){fadeIn(clock);}, delay);
    delay += speed;

    // Adding Game Options
    options.style["width"] = "250px";
    setTimeout(function(){fadeIn(options);}, delay);
    delay += speed;
    restory.style["width"] = "350px";
    restory.style["height"] = "50px";
    restory.style["font-size"] = "20px";
    rescene.style["width"] = "350px";
    rescene.style["height"] = "50px";
    rescene.style["font-size"] = "20px";
    restart.style["width"] = "350px";
    restart.style["height"] = "50px";
    restart.style["font-size"] = "20px";
    setTimeout(function(){fadeIn(row1);}, delay);
    delay += speed;

    // Adding Player Status
    status.style["width"] = "250px";
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
    moves.style["width"] = "250px";
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
    follow.style["font-size"] = "20px";
    food.style["font-size"] = "20px";
    water.style["font-size"] = "20px";
    sleep.style["font-size"] = "20px";
    panic.style["font-size"] = "20px";
    setTimeout(function(){fadeIn(row2);}, delay);
    delay += speed;
    setTimeout(function(){fadeIn(row3);}, delay);
    delay += speed;
}

function story_scene4() {
    // Bring Backing Story
    show_tags(["button", "story", "header", "second"]);

    // Setting Them Open
    hide_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "follow", "food", "water", "sleep", "panic"]);
}

function update_scene4(mode) {
    var help = document.getElementById("help").value;
    if (mode == 0) {
        follow_msgs = ["The purple particles are getting denser the further you travel.", "You walk past the shriveled body of one of the expeditioners.", "Only a meager dozen people remain from the original expedition group.", "The purple particles are dense enough now to form a opaque fog."];
        follow_update(follow_msgs, 4);
    }
    if (mode == 1) {
        food_msgs = ["You have found and eaten a sugon shroom from a discarded supply bag.", "You have found and eaten a ligon shroom.", "You have found and eaten a gulpon shroom from a discarded supply bag.", "You have found and eaten a slurbon shroom."];
        food_update(food_msgs, 4);
    }
    if (mode == 2) {
        water_msgs = ["You have drunken water from the nearby pond.", "You have gotten a water pouch from a discarded supply bag.", "You have opened your mouth and drunken the rainwater."];
        water_update(water_msgs, 4);
    }
    if (mode == 3) {
        sleep_msgs = ["You have collapsed on the grass and taken a nap.", "You have rested in the shade of a nearby tree.", "You have slept under the blaring sun."];
        sleep_update(sleep_msgs, 4);
    }
    if (mode == 4) {
        panic_msgs = ["You have faced your existential dread and lost.", "You have run around in a circle screaming and crying.", "You have not faced this much depression since your wife died."];
        panic_update(panic_msgs, 4);
    }
}

function end_scene4() {
    // Getting Current Values
    var health = document.getElementById("current_health").value;
    var hunger = document.getElementById("current_hunger").value;
    var thirst = document.getElementById("current_thirst").value;
    var energy = document.getElementById("current_energy").value;
    var time = document.getElementById("current_time").value;

    // Updating URL
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/scene5.html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(time);
    document.location.href = url;
}
