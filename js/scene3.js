function start_scene3() {
    // Setting Up CSS
    document.getElementById("body").style["background-image"] = "url(../img/scene3.jpg)";

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
    var text1 = "Scene 3";
    setTimeout(function(){typeEffect(header, speed, text1, "");}, delay);
    delay += text1.length * speed + 25 * speed;
    setTimeout(function(){header.innerHTML = "";}, delay);

    // Story Board
    var text2 = "You exit the forest and come across the entrance of a village. You decide to walk in, but as soon as you do, a disgusting stink infiltrates your nose. You look around for the source of the stench and notice the bodies of deceased children piled in the corner. Purple particles were also forming and absorbing whatever energy was left in the bodies. The villagers that were still alive were either mourning the dead or praying towards the statue of a wolf. It seems this village was suffering under the purple particles as well.";
    setTimeout(function(){typeEffect(story, speed/16, text2, "");}, delay);
    delay += text2.length * speed/16 + 25 * speed;

    // Story Board Part 2
    var text3;
    if (help.value == "yes") text3 = "When the villagers finally take notice of you, their eyes widen, and they rush over to you. They suddenly start prostrating themselves in front of you, and you step back in surprise. You turn around and see the wolf that you helped in the forest behind you. It seems like it followed you to the village, and the villagers seemed to think it was their guardian animal. The villagers seem much friendly to you now. Maybe you can employ this to your advantage to get some food and water?";
    else text3 = "When the villagers finally take notice of you, they scowl in disgust. Apparently, they don’t appreciate outsiders that much, especially during these dire times. It seems like you won't be able to get food or water from this village."
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

function action_scene3() {
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

function story_scene3() {
    // Bring Backing Story
    show_tags(["button", "story", "header", "second"]);

    // Setting Them Open
    hide_tags(["current_time", "options", "restory", "rescene", "restart", "status", "progress", "current_health", "current_hunger", "current_thirst", "current_energy", "moves", "response", "warning", "follow", "food", "water", "sleep", "panic"]);
}

function update_scene3(mode) {
    var help = document.getElementById("help").value;
    if (mode == 0) {
        follow_msgs = ["You pass by a house that has collapsed from the purple particles.", "You see the remnants of a massive fire near the village center.", "You tread by the large line for relief supplies.", "You see a gathering of people near the opposite exit of the village, do you join them?"];
        follow_update(follow_msgs, 3);
    }
    if (mode == 1) {
        food_msgs = ["You have been given a sugon shroom by a local family.", "You have been given a ligon shroom from the village chief.", "You have been given a gulpon shroom from the food warehouse", "You have been given a slurbon shroom from the village priest."];
        if (help == "yes") food_update(food_msgs, 3);
        else {
            // Variables
            var health = document.getElementById("current_health");
            var hunger = document.getElementById("current_hunger");
            var thirst = document.getElementById("current_thirst");
            var energy = document.getElementById("current_energy");
            var health_label = document.getElementById("health_label");
            var hunger_label = document.getElementById("hunger_label");
            var thirst_label = document.getElementById("thirst_label");
            var energy_label = document.getElementById("energy_label");

            // Updating Health, Food, Thirst, Energy
            update(energy, -1*getRandomInt(3, 9), 0, 100);
            current_energy.style["width"] = current_energy.value + "%";
            energy_label.innerHTML = "Energy: " + current_energy.value + "%";
            update(hunger, -1*getRandomInt(3, 9), 0, 100);
            current_hunger.style["width"] = current_hunger.value + "%";
            hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
            update(thirst, -1*getRandomInt(3, 9), 0, 100);
            current_thirst.style["width"] = current_thirst.value + "%";
            thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";

            // Updating Time
            var time_add = getRandomInt(30, 76);
            var clock = document.getElementById("current_time");
            update(clock, time_add, 0, 1000000000);
            clock.innerHTML = parse_time(parseInt(clock.value));

            // Updating Warnings
            var warning = document.getElementById("warning");
            warning.style["width"] = "80%";
            warning.style["font-size"] = "20px";
            warning.innerHTML = "";
            if (energy.value == 0) {
                update(health, -1*getRandomInt(3, 6), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You lost health from extreme tiredness.";
            }
            if (hunger.value == 0) {
                update(health, -1*getRandomInt(3, 11), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You lost health from extreme hunger."
            }
            if (thirst.value == 0) {
                update(health, -1*getRandomInt(3, 16), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You lost health from extreme thirst.";
            }
            if (health.value == 0) {
                start_death(3);
            }

            // Health Regeneration
            if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
                update(health, getRandomInt(10, 21), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You have gained health from being satiated.";
            }

            // Updating Response Count
            var response = document.getElementById("response");
            response.innerHTML = "You are unable to get food from the village.";
        }
    }
    if (mode == 2) {
        water_msgs = ["You have drunken water from the nearby well.", "You have gotten a water pouch from a local family.", "You have recieved a pail of water from the last rainstorm."];
        if (help == "yes") water_update(water_msgs, 3);
        else {
            // Variables
            var health = document.getElementById("current_health");
            var hunger = document.getElementById("current_hunger");
            var thirst = document.getElementById("current_thirst");
            var energy = document.getElementById("current_energy");
            var health_label = document.getElementById("health_label");
            var hunger_label = document.getElementById("hunger_label");
            var thirst_label = document.getElementById("thirst_label");
            var energy_label = document.getElementById("energy_label");

            // Updating Food, Thirst, Energy
            update(energy, -1*getRandomInt(3, 9), 0, 100);
            current_energy.style["width"] = current_energy.value + "%";
            energy_label.innerHTML = "Energy: " + current_energy.value + "%";
            update(hunger, -1*getRandomInt(3, 9), 0, 100);
            current_hunger.style["width"] = current_hunger.value + "%";
            hunger_label.innerHTML = "Hunger: " + current_hunger.value + "%";
            update(thirst, -1*getRandomInt(3, 9), 0, 100);
            current_thirst.style["width"] = current_thirst.value + "%";
            thirst_label.innerHTML = "Thirst: " + current_thirst.value + "%";

            // Updating Time
            var time_add = getRandomInt(30, 76);
            var clock = document.getElementById("current_time");
            update(clock, time_add, 0, 1000000000);
            clock.innerHTML = parse_time(parseInt(clock.value));

            // Updating Warnings
            var warning = document.getElementById("warning");
            warning.style["width"] = "80%";
            warning.style["font-size"] = "20px";
            warning.innerHTML = "";
            if (energy.value == 0) {
                update(health, -1*getRandomInt(3, 6), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You lost health from extreme tiredness.";
            }
            if (hunger.value == 0) {
                update(health, -1*getRandomInt(3, 11), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You lost health from extreme hunger."
            }
            if (thirst.value == 0) {
                update(health, -1*getRandomInt(3, 16), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You lost health from extreme thirst.";
            }
            if (health.value == 0) {
                start_death(3);
            }

            // Health Regeneration
            if (energy.value > 70 && hunger.value >= 70 && thirst.value >= 70) {
                update(health, getRandomInt(10, 21), 0, 100);
                current_health.style["width"] = current_health.value + "%";
                health_label.innerHTML = "Health: " + current_health.value + "%";
                warning.innerHTML += "You have gained health from being satiated.";
            }

            // Updating Response Count
            var response = document.getElementById("response");
            response.innerHTML = "You are unable to get water from the village."
        }
    }
    if (mode == 3) {
        sleep_msgs = ["You have collapsed on the grass and taken a nap.", "You have rested in the shade of a nearby tree.", "You have slept under the blaring sun."];
        sleep_update(sleep_msgs, 3);
    }
    if (mode == 4) {
        panic_msgs = ["You have faced your existential dread and lost.", "You have run around in a circle screaming and crying.", "You have not faced this much depression since your wife died."];
        panic_update(panic_msgs, 3);
    }
}

function end_scene3() {
    // Getting Current Values
    var health = document.getElementById("current_health").value;
    var hunger = document.getElementById("current_hunger").value;
    var thirst = document.getElementById("current_thirst").value;
    var energy = document.getElementById("current_energy").value;
    var time = document.getElementById("current_time").value;
    var help = document.getElementById("help").value;

    // Updating URL
    var parts = document.location.href.split("/");
    parts.pop();
    var url = parts.join("/") + "/scene4.html?";
    url += "initial_health=" + encodeURIComponent(health) + "&";
    url += "initial_hunger=" + encodeURIComponent(hunger) + "&";
    url += "initial_thirst=" + encodeURIComponent(thirst) + "&";
    url += "initial_energy=" + encodeURIComponent(energy) + "&";
    url += "initial_time=" + encodeURIComponent(time) + "&";
    url += "help=" + encodeURIComponent(help);
    document.location.href = url;
}
