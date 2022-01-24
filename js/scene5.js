function start_scene5() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../img/scene5.jpg)";

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

    // First Message
    header.style["width"] = "250px";
    var text1 = "Scene 5";
    setTimeout(function(){typeEffect(header, speed, text1, "");}, delay);
    delay += text1.length * speed + 25 * speed;
    setTimeout(function(){header.innerHTML = "";}, delay);

    // Story Board
    var text2 = "Despite witnessing the horrors of the purple particles, you and the expeditionary group keep trekking onwards. Eventually, you reach the entrance of a purple forest, with the densest fog of particles so far. It was so dense you weren’t able to see more than a couple of feet in front of you. This was probably where the particles originated from. After saying what looked to be a prayer, the group walks into the fog, and you lose sight of them. You follow in soon after, but after less then a dozen steps, you see a clump of shriveled bodies. From the clothing, you could tell it was the expeditionary group. They had died within seconds of walking into the fog, and you would likely be the same. You brace for impact, preparing for your death, but after a minute, you are still alive. It seems the particles aren’t hurting you for some reason. You try to turn around and leave, but the particles have hardened into a barrier. The only way left is to continue going towards the epicenter.";
    setTimeout(function(){typeEffect(story, speed/16, text2, "");}, delay);
    delay += text2.length * speed/16 + 25 * speed;

    // Fading In Button
    show_tags(["button"]);
    var button = document.getElementById("button");
    button.style["width"] = "250px";
    button.style["height"] = "100px";
    button.style["font-size"] = "20px";
    setTimeout(function(){fadeIn(button);}, delay);
}

function action_scene5() {
    // Removing Button And Story
    hide_list = ["button", "story", "header"];
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
    show_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "response", "warning", "follow", "food", "water", "sleep", "panic"]);

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

function story_scene5() {
    // Bring Backing Story
    show_tags(["button", "story", "header"]);

    // Setting Them Open
    hide_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "response", "warning", "follow", "food", "water", "sleep", "panic"]);
}

function update_scene5(mode) {
    if (mode == 0) {
        follow_msgs = ["", "You run into a tree every minute or two for what feels like an eternity.", "The fog suddenly started getting thinner, maybe it is the center of the storm?", "You are close to the eye of the storm, do you continue forward?"];
        follow_update(follow_msgs, 5);
    }
    if (mode == 1) {
        food_msgs = ["You have found and eaten a sugon shroom from a discarded supply bag.", "You have found and eaten a ligon shroom from a discarded supply bag.", "You have found and eaten a gulpon shroom from a discarded supply bag.", "You have found and eaten a slurbon shroom from a discarded supply bag."];
        food_update(food_msgs, 5);
    }
    if (mode == 2) {
        water_msgs = ["You have drunken water from the nearby pond.", "You have gotten a water pouch from a discarded supply bag.", "You have opened your mouth and drunken the rainwater."];
        water_update(water_msgs, 5);
    }
    if (mode == 3) {
        sleep_msgs = ["You have collapsed on the grass and taken a nap.", "You have rested under a nearby tree.", "You have slept under a thick blanket of particles."];
        sleep_update(sleep_msgs, 5);
    }
    if (mode == 4) {
        panic_msgs = ["You have faced your existential dread and lost.", "You have run around in a circle screaming and crying.", "You have not faced this much depression since your wife died."];
        panic_update(panic_msgs, 5);
    }
}

function end_scene5() {
    // Getting Current Values
    var health = document.getElementById("current_health").value;
    var hunger = document.getElementById("current_hunger").value;
    var thirst = document.getElementById("current_thirst").value;
    var energy = document.getElementById("current_energy").value;
    var time = document.getElementById("current_time").value;

    // Updating URL
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/ending.html";
    document.location.href = url;
}
